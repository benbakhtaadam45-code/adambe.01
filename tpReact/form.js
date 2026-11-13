import { useState } from "react";

const initialForm = {
  nom: "",
  email: "",
  password: "",
  confirmPassword: "",
  accepte: false,
};

function validate(form) {
  const errors = {};

  if (!form.nom.trim()) errors.nom = "Le nom est obligatoire";
  else if (form.nom.trim().length < 3)
    errors.nom = "Minimum 3 caractères";

  if (!form.email.trim()) errors.email = "L'email est obligatoire";
  else if (!form.email.includes("@"))
    errors.email = "Email invalide";

  if (!form.password) errors.password = "Mot de passe obligatoire";
  else if (form.password.length < 6)
    errors.password = "Minimum 6 caractères";

  if (form.confirmPassword !== form.password)
    errors.confirmPassword = "Les mots de passe ne correspondent pas";

  if (!form.accepte)
    errors.accepte = "Vous devez accepter les conditions";

  return errors;
}

export default function InscriptionForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSuccess(true);
      setForm(initialForm);
    } else {
      setSuccess(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Inscription</h2>

      {success && <p style={{ color: "green" }}>Inscription réussie ✅</p>}

      <div>
        <input
          name="nom"
          placeholder="Nom"
          value={form.nom}
          onChange={handleChange}
        />
        {errors.nom && <p style={{ color: "red" }}>{errors.nom}</p>}
      </div>

      <div>
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>

      <div>
        <input
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Mot de passe"
          value={form.password}
          onChange={handleChange}
        />
        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? "Cacher" : "Afficher"}
        </button>
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </div>

      <div>
        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirmer le mot de passe"
          value={form.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && (
          <p style={{ color: "red" }}>{errors.confirmPassword}</p>
        )}
      </div>

      <div>
        <label>
          <input
            name="accepte"
            type="checkbox"
            checked={form.accepte}
            onChange={handleChange}
          />
          J'accepte les conditions
        </label>
        {errors.accepte && <p style={{ color: "red" }}>{errors.accepte}</p>}
      </div>

      <button type="submit">S'inscrire</button>
    </form>
  );
}