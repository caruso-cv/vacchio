export default function Footer() {
  return (
    <footer className="py-4">
      <div className="max-auto text-center">
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Carmen James Caruso Vacchio • @carmen.vacchio
        </p>
      </div>
    </footer>
  );
}