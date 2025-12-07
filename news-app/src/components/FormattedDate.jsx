function FormattedDate() {
  const now = new Date();

  const weekday = now.toLocaleString("en-US", { weekday: "long" });
  const month = now.toLocaleString("en-US", { month: "long" });
  const day = now.getDate();
  const year = now.getFullYear();
  const hour = now.getHours();
  const minute = now.getMinutes();

  let date = `${weekday}, ${month} ${day} ${year} ${hour}:${minute}`;

  return (
    <>
      <p className="font-bold bg-white text-blue-600">{date}</p>
    </>
  );
}
export default FormattedDate;
