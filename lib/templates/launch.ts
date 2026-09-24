export type LaunchTemplate = {
  id: string;
  title: string;
  tagline: string;
  hero: {
    headline: string;
    subheadline: string;
    ctaText: string;
    backgroundColor: string;
    accentColor: string;
  };
  features: Array<{ icon: string; title: string; description: string }>;
};

export const launchTemplateDefaults: LaunchTemplate = {
  id: "launch-001",
  title: "Launch Template",
  tagline: "Fast startup website for Myanmar businesses",
  hero: {
    headline: "သင်၏အချဉ်အလျင်မြန်စတင်ပါ",
    subheadline: "Letyar မှ ပြင်ဆင်ထားသော ယူဘ်ဆိုက်",
    ctaText: "ယခုစတင်ပါ",
    backgroundColor: "#0F172A",
    accentColor: "#0EA5E9",
  },
  features: [
    { icon: "⚡", title: "လျင်မြန်", description: "သုံးရက်အတွင်း" },
    { icon: "📱", title: "မိုဘိုင်း", description: "လူတိုင်းအတွက်" },
    { icon: "🎨", title: "ဒီဇိုင်း", description: "လှလှပပ ပြင်ဆင်" },
  ],
};
