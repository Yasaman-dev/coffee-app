import React from "react";

function Card({ coffee, onClick, valentineMode }) {
  const isValentine = valentineMode

  return (
    <div
      onClick={() => onClick(coffee)}
      style={{
        border: isValentine ? "2px solid #ff4d7a" : "1px solid gray",
        padding: "20px",
        margin: "10px",
        borderRadius: "12px",
        boxShadow: isValentine
          ? "0 8px 20px rgba(255, 77, 122, 0.7)" // glow صورتی
          : "0 4px 8px rgba(0,0,0,0.3)",
        maxWidth: "200px",
        textAlign: "center",
        backgroundColor: isValentine ? "#ffe0e0" : "#333",
        color: "#fff",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100px",
        cursor: "pointer",
        transition: "all 0.3s ease",
        position: "relative",
        overflow: "hidden"
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      {/* قلب متحرک ولنتاین */}
      {isValentine && (
        <span
          style={{
            position: "absolute",
            top: "-10px",
            right: "-10px",
            fontSize: "2rem",
            color: "#ff4d7a",
            animation: "beat 1s infinite"
          }}
        >
          ❤️
        </span>
      )}

      <img
        src={coffee.image}
        alt={coffee.name}
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          borderRadius: "8px",
          marginBottom: "10px",
          filter: isValentine ? "brightness(1.1)" : "none"
        }}
      />
      <h2
        style={{
          margin: "5px 0",
          fontFamily: isValentine ? "'Pacifico', cursive" : "Arial, sans-serif",
          textShadow: isValentine
            ? "1px 1px 3px rgba(255, 77, 122, 0.8)"
            : "none"
        }}
      >
        {coffee.name}
      </h2>
      <p style={{ margin: "3px 0" }}>Price: {coffee.price}</p>
      <p style={{ margin: "3px 0" }}>
        Rating: {coffee.rating}{" "}
        <span style={{ color: "#f5c518" }}>★</span>
      </p>

      {/* انیمیشن ضربان قلب */}
      <style>
        {`
          @keyframes beat {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.3); }
          }
      ` }
      </style>
    </div>
  );
}

export default Card;