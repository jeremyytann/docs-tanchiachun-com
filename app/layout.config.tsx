import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Docs Layout: app/(home)/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <img src='./images/logo.png' alt='logo' width={24} height={24}>
        </img>

        Tan Chia Chun
      </>
    ),
  },
};
