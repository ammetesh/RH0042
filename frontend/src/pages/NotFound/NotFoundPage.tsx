import { Link } from "react-router-dom";
import Button from "@/components/common/Button";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center">

      <div>

        <h1 className="text-8xl font-bold gradient-text">
          404
        </h1>

        <p className="text-muted mt-6 mb-10">
          The page you requested could not be found.
        </p>

        <Link to="/">
          <Button>
            Return Home
          </Button>
        </Link>

      </div>

    </div>
  );
}