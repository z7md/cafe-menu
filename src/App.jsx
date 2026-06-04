import { useEffect, useState } from "react";
import "./App.css";

const sweets = [
  { name: "تردد بيري", price: "23.00", imageName: "7.png" },
  { name: "لاير تشيز كيك", price: "27.00", imageName: "13.png" },
  { name: "فانيليا تارت", price: "25.00", imageName: "6.png" },
  { name: "بابكا سيلكا", price: "17.00", imageName: "12.png" },
  { name: "تيراميسو", price: "25.00", imageName: "8.png" },
  { name: "تردد شوكلت", price: "25.00", imageName: "9.png" },
  { name: "فلمبونق شوكلت", price: "25.00", imageName: "11.png" },
];

const hotDrinks = [
  { name: "لاتيه", price: "22.00", imageName: "1.png" },
  { name: "كابتشينو", price: "22.00", imageName: "1.png" },
  { name: "فلات وايت", price: "22.00", imageName: "2.png" },
  { name: "كورتادو", price: "21.00", imageName: "2.png" },
  { name: "امريكانو حار", price: "17.00", imageName: "1.png" },
  { name: "سبانش حار", price: "23.00", imageName: "2.png" },
  { name: "اسبريسو", price: "14.00", imageName: "1.png" },
  { name: "شوكولاتة ساخنة", price: "23.00", imageName: "1.png" },
];

const coldDrinks = [
  { name: "ايس لاتيه", price: "23.00", imageName: "1.png" },
  { name: "ايس سبانش لاتيه", price: "24.00", imageName: "2.png" },
  { name: "ايس امريكانو", price: "20.00", imageName: "2.png" },
  { name: "ايس الفرّيدو", price: "24.00", imageName: "1.png" },
  { name: "ايس ماتشا", price: "25.00", imageName: "1.png" },
  { name: "مياه غازية", price: "6.00", imageName: "2.png" },
  { name: "ايس كركديه", price: "25.00", imageName: "2.png" },
];

const drepsDrinks = [
  { name: "قهوة اليوم بارد", price: "23.00", imageName: "1.png" },
  { name: "قهوة اليوم حار", price: "24.00", imageName: "2.png" },
  { name: "قهوة مقطرة بارد", price: "20.00", imageName: "1.png" },
  { name: "قهوة مقطرة حارة", price: "24.00", imageName: "2.png" },
];

const sections = [
  {
    id: "sweets",
    title: "Sweets",
    arabicTitle: "الحلويات",
    items: sweets,
  },
  {
    id: "hot",
    title: "Hot Drinks",
    arabicTitle: "المشروبات الحارة",
    items: hotDrinks,
  },
  {
    id: "cold",
    title: "Cold Drinks",
    arabicTitle: "المشروبات الباردة",
    items: coldDrinks,
  },
  {
    id: "dreps",
    title: "Drip Coffee",
    arabicTitle: "القهوة المقطرة",
    items: drepsDrinks,
  },
];

function getPublicPath(fileName) {
  const cleanName = fileName.startsWith("/") ? fileName.slice(1) : fileName;
  return `${import.meta.env.BASE_URL}${cleanName}`;
}

function MenuItem({ item }) {
  return (
    <div className="menu-item">
      <img
        src={getPublicPath(item.imageName)}
        alt={item.name}
        className="product-image"
      />

      <div className="item-info">
        <span className="price">
          <img
            src={getPublicPath("Saudi_Riyal.svg")}
            alt="ريال"
            className="riyal-icon"
          />
          {item.price}
        </span>

        <span className="name">{item.name}</span>
      </div>
    </div>
  );
}

function MenuSection({ section }) {
  const itemCount = section.items.length;

  return (
    <section className="menu-section">
      <h2 className="english-title">{section.title}</h2>

      <div className="grid-area">
        <div className={`items-grid items-count-${itemCount}`}>
          {section.items.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </div>
      </div>

      <div className="bottom-decoration">
        <div className="bottom-wave"></div>
        <img
          src={getPublicPath("silka.png")}
          alt="Silka"
          className="bottom-logo"
        />
      </div>
    </section>
  );
}

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSection = (index) => {
    if (index < 0 || index >= sections.length || isAnimating) return;

    setActiveIndex(index);
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
    }, 900);
  };

  useEffect(() => {
    const handleWheel = (event) => {
      event.preventDefault();

      if (isAnimating) return;

      if (event.deltaY > 0) {
        goToSection(activeIndex + 1);
      } else {
        goToSection(activeIndex - 1);
      }
    };

    const handleKeyDown = (event) => {
      if (isAnimating) return;

      if (event.key === "ArrowDown") {
        goToSection(activeIndex + 1);
      }

      if (event.key === "ArrowUp") {
        goToSection(activeIndex - 1);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, isAnimating]);

  useEffect(() => {
    let startY = 0;

    const handleTouchStart = (event) => {
      startY = event.touches[0].clientY;
    };

    const handleTouchEnd = (event) => {
      if (isAnimating) return;

      const endY = event.changedTouches[0].clientY;
      const difference = startY - endY;

      if (Math.abs(difference) < 50) return;

      if (difference > 0) {
        goToSection(activeIndex + 1);
      } else {
        goToSection(activeIndex - 1);
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [activeIndex, isAnimating]);

  return (
    <>
      <nav className="topbar">
        <div className="nav-links">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => goToSection(index)}
              className={activeIndex === index ? "active-link" : ""}
            >
              {section.arabicTitle}
            </button>
          ))}
        </div>
      </nav>

      <main className="fullpage-wrapper">
        <div
          className="sections-slider"
          style={{ transform: `translateY(-${activeIndex * 100}vh)` }}
        >
          {sections.map((section) => (
            <MenuSection key={section.id} section={section} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;