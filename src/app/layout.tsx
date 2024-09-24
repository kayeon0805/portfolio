import { Metadata } from 'next'
import localFont from 'next/font/local'
import StyledComponentsRegistry from '../lib/registry'
import ThemeClient from './ThemeClient'

export const metadata: Metadata = {
  // eslint-disable-next-line quotes
  title: "Kayeon's portfolio",
  description: 'Frontend Developer 김가연 | Portfolio',
}

const pretendard = localFont({
  src: [
    {
      path: '../../public/fonts/Pretendard-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pretendard-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pretendard-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pretendard-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pretendard-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={pretendard.className}>
      <body>
        <StyledComponentsRegistry>
          <ThemeClient>
            <div id="root">{children}</div>
          </ThemeClient>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
