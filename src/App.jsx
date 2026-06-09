import { useEffect, useState } from "react";
import "./App.css";

const sweets = [
  {
    name: "لاير تشيز كيك",
    price: "27.00",
    imageName: "13.png",
    description: "تشيز كيك بطبقات غنية وقوام كريمي ناعم.",
  },
  {
    name: "بابكا سيلكا",
    price: "17.00",
    imageName: "12.png",
    description: "بابكا محضّرة بطبقات غنية ونكهة سيلكا الخاصة.",
  },
  {
    name: "تيراميسو",
    price: "25.00",
    imageName: "8.png",
    description: "حلا إيطالي كلاسيكي بطبقات القهوة والكريمة.",
  },
  {
    name: "تردد شوكلت",
    price: "25.00",
    imageName: "9.png",
    description: "حلا شوكولاتة غني بطعم عميق وقوام ناعم.",
  },
  {
    name: "فلمبونق شوكلت",
    price: "25.00",
    imageName: "11.png",
    description: "حلا شوكولاتة مميز بطبقات لذيذة وقوام غني.",
  },
  {
    name: "توفي تارت",
    price: "27.00",
    imageName: "13.png",
    description: "تشيز كيك بطبقات غنية وقوام كريمي ناعم.",
  },
  {
    name: "توفي تارت",
    price: "27.00",
    imageName: "14.png",
    description: "تشيز كيك بطبقات غنية وقوام كريمي ناعم.",
    new: true,
  },
].sort((a, b) => Number(Boolean(b.new)) - Number(Boolean(a.new)));

const hotDrinks = [
  {
    name: "لاتيه",
    price: "22.00",
    imageName: "1.png",
    description: "قهوة إسبريسو مع حليب مبخر وقوام ناعم.",
  },
  {
    name: "كابتشينو",
    price: "22.00",
    imageName: "1.png",
    description: "قهوة بالحليب مع رغوة كثيفة ومتوازنة.",
  },
  {
    name: "فلات وايت",
    price: "22.00",
    imageName: "1.png",
    description: "قهوة مركزة مع حليب ناعم وكمية رغوة خفيفة.",
  },
  {
    name: "كورتادو",
    price: "21.00",
    imageName: "1.png",
    description: "إسبريسو ممزوج بكمية متوازنة من الحليب.",
  },
  {
    name: "امريكانو حار",
    price: "17.00",
    imageName: "1.png",
    description: "قهوة سوداء ساخنة بطعم واضح وخفيف.",
  },
  {
    name: "سبانش حار",
    price: "23.00",
    imageName: "1.png",
    description: "قهوة بالحليب المحلى بطعم غني وناعم.",
  },
  {
    name: "اسبريسو",
    price: "14.00",
    imageName: "1.png",
    description: "قهوة مركزة بطعم قوي وحجم صغير.",
  },
  {
    name: "شوكولاتة ساخنة",
    price: "23.00",
    imageName: "1.png",
    description: "مشروب شوكولاتة دافئ بقوام كريمي غني.",
  },
];

const coldDrinks = [
  {
    name: "ايس لاتيه",
    price: "23.00",
    imageName: "1.png",
    description: "قهوة باردة بالحليب بطعم منعش وناعم.",
  },
  {
    name: "ايس سبانش لاتيه",
    price: "24.00",
    imageName: "1.png",
    description: "قهوة باردة بالحليب المحلى ونكهة غنية.",
  },
  {
    name: "ايس امريكانو",
    price: "20.00",
    imageName: "1.png",
    description: "قهوة سوداء باردة بطعم قوي ومنعش.",
  },
  {
    name: "ايس الفرّيدو",
    price: "24.00",
    imageName: "1.png",
    description: "مشروب قهوة بارد بقوام كريمي ورغوة ناعمة.",
  },
  {
    name: "ايس ماتشا",
    price: "25.00",
    imageName: "1.png",
    description: "مشروب ماتشا بارد بطعم ناعم ومنعش.",
  },
  {
    name: "مياه غازية",
    price: "6.00",
    imageName: "1.png",
    description: "مياه غازية منعشة وخفيفة.",
  },
  {
    name: "ايس كركديه",
    price: "25.00",
    imageName: "1.png",
    description: "مشروب كركديه بارد بطعم منعش ولون مميز.",
  },
];

const drepsDrinks = [
  {
    name: "قهوة اليوم بارد",
    price: "23.00",
    imageName: "1.png",
    description: "قهوة اليوم محضّرة باردة بطعم متوازن ومنعش.",
  },
  {
    name: "قهوة اليوم حار",
    price: "24.00",
    imageName: "2.png",
    description: "قهوة اليوم الساخنة من حبوب مختارة.",
  },
  {
    name: "قهوة مقطرة بارد",
    price: "20.00",
    imageName: "1.png",
    description: "قهوة مقطرة باردة بطعم ناعم وواضح.",
  },
  {
    name: "قهوة مقطرة حارة",
    price: "24.00",
    imageName: "2.png",
    description: "قهوة مقطرة ساخنة بطريقة تحضير متقنة.",
  },
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

function MenuItem({ item, onSelect }) {
  return (
<button
  className={`menu-item ${item.new ? "is-new" : ""}`}
  onClick={() => onSelect(item)}
>
  {item.new && <span className="new-label">New</span>}

  <img
    src={getPublicPath(item.imageName)}
    alt={item.name}
    className="product-image"
  />

  <div className="item-info">
    <span className="name">{item.name}</span>

    <span className="price">
      <img
        src={getPublicPath("Saudi_Riyal.svg")}
        alt="ريال"
        className="riyal-icon"
      />
      {item.price}
    </span>
  </div>
</button>
  );
}

function MenuSection({ section, selectedItem, setSelectedItem }) {
  const itemCount = section.items.length;

  return (
    <section className="menu-section">
      <div className={`section-content ${selectedItem ? "is-detail" : ""}`}>
        {!selectedItem ? (
          <div className="grid-view">
            <h2 className="english-title">{section.title}</h2>

            <div className="grid-area">
              <div className={`items-grid items-count-${itemCount}`}>
                {section.items.map((item, index) => (
                  <MenuItem
                    key={index}
                    item={item}
                    onSelect={setSelectedItem}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="item-detail-view">
            <button
              className="back-button"
              onClick={() => setSelectedItem(null)}
            >
              رجوع
            </button>

            <img
              src={getPublicPath(selectedItem.imageName)}
              alt={selectedItem.name}
              className="detail-image"
            />

            <h2 className="detail-name">{selectedItem.name}</h2>

            <p className="detail-description">
              {selectedItem.description || "وصف المنتج غير متوفر حالياً."}
            </p>

            <div className="detail-price">
              <img
                src={getPublicPath("Saudi_Riyal.svg")}
                alt="ريال"
                className="detail-riyal-icon"
              />
              <span>{selectedItem.price}</span>
            </div>
          </div>
        )}
      </div>

      <div className="bottom-decoration">
  <img
    src={getPublicPath("wave.png")}
    alt="Wave"
    className="bottom-wave-image"
  />

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
  const [selectedItem, setSelectedItem] = useState(null);

  const goToSection = (index) => {
    if (index < 0 || index >= sections.length || isAnimating) return;

    setSelectedItem(null);
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

      if (selectedItem) {
        setSelectedItem(null);
        return;
      }

      if (event.deltaY > 0) {
        goToSection(activeIndex + 1);
      } else {
        goToSection(activeIndex - 1);
      }
    };

    const handleKeyDown = (event) => {
      if (isAnimating) return;

      if (selectedItem) {
        if (
          event.key === "ArrowDown" ||
          event.key === "ArrowUp" ||
          event.key === "Escape"
        ) {
          setSelectedItem(null);
        }

        return;
      }

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
  }, [activeIndex, isAnimating, selectedItem]);

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

      if (selectedItem) {
        setSelectedItem(null);
        return;
      }

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
  }, [activeIndex, isAnimating, selectedItem]);

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
          {sections.map((section, index) => (
            <MenuSection
              key={section.id}
              section={section}
              selectedItem={index === activeIndex ? selectedItem : null}
              setSelectedItem={setSelectedItem}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;