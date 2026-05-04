export default function Title({ text = "" }) {
  return (
    <div className="grid justify-center">
        <p className="text-center text-black-unco text-3xl sm:text-4xl font-bold font-Header-B">
            {text}
        </p>
        <h1 className="bg-lime-unco py-1 w-1/3 mt-5"></h1>
    </div>
  );
}