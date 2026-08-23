const APP_STORE_URL = "https://apps.apple.com/";

type AppStoreBadgesProps = {
  compact?: boolean;
};

export function AppStoreBadges({ compact = false }: AppStoreBadgesProps) {
  return (
    <div className={`store-badges${compact ? " store-badges--compact" : ""}`}>
      <a href={APP_STORE_URL} aria-label="Download Together Notes on the App Store">
        <img
          src="/app-store-badge.svg"
          alt="Download on the App Store"
          width="120"
          height="40"
        />
      </a>
      <a href={APP_STORE_URL} aria-label="Download Together Notes on the Mac App Store">
        <img
          src="/mac-app-store-badge.svg"
          alt="Download on the Mac App Store"
          width="156"
          height="40"
        />
      </a>
    </div>
  );
}
