import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AuthModal from "@/components/AuthModal";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (!open) {
      const from = (location.state as any)?.from || "/";
      navigate(from, { replace: true });
    }
  }, [open, navigate, location.state]);

  return (
    <div className="min-h-[60vh]">
      <AuthModal open={open} onOpenChange={setOpen} />
    </div>
  );
}
