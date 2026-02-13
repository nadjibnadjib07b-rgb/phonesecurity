const fr = {
  nav: {
    home: "Accueil",
    about: "À propos",
    check: "Vérifier",
    report: "Signaler",
    delait: "Supprimer",
    signup: "S'inscrire",
  },

  home: {
    title1: "Protégez votre",
    title2: "Téléphone",
    desc:
      "Luttez contre le vol de téléphones, vérifiez les IMEI et aidez à récupérer les appareils volés.",
    checkBtn: "Vérifier IMEI",
    learnMore: "En savoir plus",
  },
  about: {
    title: "À propos de PhoneSecurity",
  
    p1: "PhoneSecurity est une plateforme créée pour lutter contre le vol de téléphones et empêcher la revente des appareils volés.",
  
    p2: "Notre mission est de permettre aux utilisateurs de vérifier l'état d'un téléphone avant de l'acheter et d'aider les propriétaires à récupérer leurs appareils perdus ou volés.",
  
    p3: "Les utilisateurs peuvent créer un compte, enregistrer les informations de leur téléphone et le signaler en cas de vol.",
  
    p4: "En travaillant ensemble, nous pouvons réduire le vol et retourner les téléphones à leurs propriétaires légitimes.",
  
    features: {
      checkTitle: "Vérifier IMEI",
      checkDesc: "Vérifiez si un téléphone a été signalé comme volé avant de l'acheter.",
  
      reportTitle: "Signaler un téléphone",
      reportDesc: "Déclarez votre appareil perdu ou volé et protégez les autres.",
  
      secureTitle: "Sécuriser le téléphone",
      secureDesc: "Créez un compte pour gérer vos informations en toute sécurité."
    }
  },

  check: {
    title: "Vérifier IMEI",
    description: "Entrez votre numéro IMEI pour vérifier si le téléphone a été signalé comme volé.",
    placeholder: "Entrez IMEI (15 chiffres)",
    disclaimer: "Je confirme vérifier cet IMEI de bonne foi et j'assume toute responsabilité.",
    button: "Vérifier",
    clean: "✅ Ce téléphone est propre. Aucun signalement trouvé.",
    stolen: "❌ Ce téléphone est signalé comme volé.",
    owner: "Propriétaire",
    phone: "Téléphone",
    email: "Email",
    country: "Pays",
  },

  report: {
    title1: "Signaler",
    title2: "Téléphone Volé",
    description:
      "Si votre téléphone a été perdu ou volé, déclarez-le ici en utilisant le numéro IMEI et vos coordonnées. Si quelqu’un le vérifie, il pourra vous contacter.",
    imeiPlaceholder: "Numéro IMEI (15 chiffres)",
    brandPlaceholder: "Marque du téléphone (Samsung, iPhone...)",
    colorPlaceholder: "Couleur du téléphone",
    contactPlaceholder: "Votre numéro ou email",
    disclaimer:
      "En soumettant ce formulaire, vous confirmez que les informations sont exactes et que vous êtes le propriétaire légitime de cet appareil. PhoneSecurity n’est pas responsable en cas d’utilisation abusive.",
    checkbox:
      "Je confirme que les informations fournies sont exactes et j’assume l’entière responsabilité de cette déclaration.",
    button: "Signaler le téléphone",
    invalidImei: "❌ IMEI invalide. Il doit contenir exactement 15 chiffres.",
    success: "✔ Votre téléphone a été signalé avec succès.",
    alreadyChecked: "⚠️ Cet IMEI a déjà été vérifié par d’autres utilisateurs.",
    recoverySent: "🔐 Un code de récupération a été envoyé à vos coordonnées.",
    keepSafe:
      "Conservez-le précieusement. Vous en aurez besoin pour supprimer le signalement si votre téléphone est récupéré.",
  },

  delait: {
    title1: "Supprimer",
    title2: "le signalement",
    description:
      "Si vous avez récupéré votre téléphone, vous pouvez supprimer le signalement en entrant l'IMEI et le code de récupération.",
    imeiPlaceholder: "IMEI (15 chiffres)",
    codePlaceholder: "Code de récupération (6 chiffres)",
    confirm:
      "Je confirme être le propriétaire légitime de ce téléphone et j'accepte la responsabilité.",
    button: "Supprimer",
    invalidImei: "❌ L'IMEI doit contenir 15 chiffres.",
    invalidCode: "❌ Le code doit contenir 6 chiffres.",
    success: "Le signalement a été supprimé.",
    successDesc: "Ce téléphone n'est plus marqué comme volé.",
    error: "IMEI ou code invalide.",
  },

  signup: {
    title1: "Créer",
    title2: "un compte",
    email: "Adresse email",
    password: "Mot de passe",
    confirmPassword: "Confirmer le mot de passe",
    show: "Afficher",
    hide: "Masquer",
    strength: "Force du mot de passe:",
    weak: "Faible",
    medium: "Moyen",
    strong: "Fort",
    agree: "J'accepte les conditions générales.",
    create: "Créer un compte",
    creating: "Création...",
    haveAccount: "Vous avez déjà un compte?",
    login: "Connexion",
    passwordWeak: "❌ Mot de passe trop faible.",
    passwordMismatch: "❌ Les mots de passe ne correspondent pas.",
  },

  login: {
    title: "Connexion",
    email: "Adresse email",
    password: "Mot de passe",
    show: "Afficher",
    hide: "Masquer",
    button: "Se connecter",
    loading: "Connexion...",
    noAccount: "Aucun compte trouvé.",
    invalid: "Email ou mot de passe incorrect.",
    forgot: "Mot de passe oublié ?",
    reset: "Réinitialiser",
  },

  forgot: {
    title: "Réinitialiser le mot de passe",
    step1Desc: "Entrez votre email pour recevoir un code.",
    step2Desc: "Entrez le code et choisissez un nouveau mot de passe.",
    email: "Adresse email",
    code: "Code de réinitialisation (6 chiffres)",
    newPassword: "Nouveau mot de passe",
    confirmPassword: "Confirmer le mot de passe",
    sendButton: "Envoyer le code",
    sending: "Envoi...",
    resetButton: "Réinitialiser",
    resetting: "Réinitialisation...",
    invalidEmail: "Veuillez entrer un email valide.",
    invalidCode: "Code invalide.",
    weakPassword: "Mot de passe trop faible.",
    passwordMismatch: "Les mots de passe ne correspondent pas.",
    show: "Afficher",
    hide: "Masquer",
  },

  dashboard: {
    my: "Mon",
    phone: "Téléphone",
    logout: "Déconnexion",
    description: "Gérez et sauvegardez les informations de votre téléphone en toute sécurité.",
    imei: "IMEI (15 chiffres)",
    brand: "Marque du téléphone",
    color: "Couleur du téléphone",
    save: "Enregistrer",
    saved: "Informations enregistrées avec succès.",
    savedInfo: "Informations enregistrées",
    imeiLabel: "IMEI :",
    brandLabel: "Marque :",
    colorLabel: "Couleur :",
    secure: "Toutes les informations sont sécurisées.",
    invalidImei: "L'IMEI doit contenir exactement 15 chiffres.",
    reportNow: "Signaler ce téléphone"
  },
  
  
  
  
  
  
  
  
  
};

export default fr;
