export default async function page() {
  new Promise((resolve) => {
    setTimeout(resolve, 4000);
  });
  return <div>page</div>;
}
