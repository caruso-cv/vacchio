export default function Footer() {
  return (
    <footer className="py-4 px-4">
      <div className="max-auto text-left">
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Carmen James Caruso Vacchio • @carmen.vacchio
        </p>
      </div>
    </footer>
  );
}