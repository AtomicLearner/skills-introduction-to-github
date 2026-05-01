export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-12">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:justify-start space-x-6 md:order-2">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">About</span>
              About
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Submit a Tool</span>
              Submit a Tool
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Privacy</span>
              Privacy
            </a>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-sm text-gray-500">
              &copy; {new Date().getFullYear()} AI Directory. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
