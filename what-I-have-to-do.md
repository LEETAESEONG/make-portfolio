# 나중에 할 일

1. 함수 만들기 => 사이트 자동화
   - commit 개수 및 project 등
2. 관리자 페이지 만들기
3. 서버 만들기
4. 버튼 활성화
5. 언어 설정 버튼 만들기
   - 한국어 (기본)
   - 영어
   - 프랑스어
   - 일본어
6. darkmode whitemode 만들기
7. 이력서도 자주 업데이트 해야 함
8. contact send message disabled 처리함
9. 모바일 버전에서 링크 이동 했을 때 자동으로 닫히면 좋을 것 같다.

# 설치

```bash
npx create-next-app@latest . npx shadcn-ui@latest init npx shadcn-ui@latest add input button scroll-area select sheet tabs textarea tooltip

work => experience

npm i framer-motion
```

- animate presence 부분이 클릭하면 깜빡거리게 만들 수 있음

```bash
npm i react-icons

npm i react-countup

npm i swiper
```

# 추가사항
- vercel에서 서버 확인 하기 위해 설치
```bash
npm i @vercel/speed-insights
```
- 이것도 추가해야 한다.
```tsx
// 이 부분
import { SpeedInsights } from '@vercel/speed-insights/next';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
```