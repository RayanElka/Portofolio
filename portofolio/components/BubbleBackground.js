export default function BubbleBackground() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "110vw",
          height: "110vw",
          top: -90,
          left: -60,
          background: "radial-gradient(circle,#68e0ff33 0%,#fff0 75%)",
          borderRadius: "50%",
          filter: "blur(10px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "30vw",
          height: "30vw",
          top: 90,
          right: -45,
          background: "radial-gradient(circle,#46a6fd60 0%,#fff0 76%)",
          borderRadius: "50%",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "25vw",
          height: "25vw",
          bottom: 27,
          left: -10,
          background: "radial-gradient(circle,#d7f8ff60 0%,#fff0 80%)",
          borderRadius: "50%",
        }}
      />
    </div>
  );
}
