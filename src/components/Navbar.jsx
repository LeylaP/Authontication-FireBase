import { signOut } from "firebase/auth";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Navbar(prop) {
  const navigate = useNavigate();
  const logged = prop.logged;

  // kullanıcı çıkış a basınca logout function çalışır ve /auth sayfasına gider
  const logout = async () => {
    toast.success("Çıkış yapılıyor...");

    // yönlendirme toast.success("Çıkış yapılıyor...") çalıştıktan 3 saniye sonra yapılacal
    setTimeout(() => {
      signOut(auth);
      navigate("/auth");
    }, 3000);
    // firebase'in kendisinde olan ve çıkış yapmamızı sağlıyan fonksion
  };

  return (
    <div className="navbar">
      <div className="navbar-left">FireBase</div>

      <div onClick={logout} className="navbar-right">
        Çıkış Yap
      </div>
    </div>
  );
}
