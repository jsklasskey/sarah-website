// FontAwesome global declarations
interface Window {
  FontAwesome: any;
  trackEvent: (category: string, action: string, label: string) => void;
  trackPageView: (path: string) => void;
}