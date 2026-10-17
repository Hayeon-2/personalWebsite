# Hello, World!

Next.js App Router, TypeScript, Tailwind CSS로 만든 간단한 반응형 웹사이트입니다.

## 로컬 실행

Node.js 22 LTS 이상을 사용하세요.

```bash
npm install
npm run dev
```

브라우저에서 http://localhost:3000 을 열면 됩니다.

## 프로덕션 빌드

```bash
npm run build
npm start
```

## Vercel 연결

1. 이 프로젝트를 GitHub 저장소에 올립니다.
2. [Vercel 새 프로젝트](https://vercel.com/new)에서 해당 저장소를 Import합니다.
3. Framework Preset은 **Next.js**, Root Directory는 프로젝트 루트로 선택합니다.
4. 기본 빌드 설정을 유지하고 **Deploy**를 누릅니다.

환경 변수나 별도의 `vercel.json` 설정은 필요하지 않습니다. 연결 후에는 기본 배포 브랜치에 push하면 자동으로 배포됩니다.

공식 안내: [Vercel의 Next.js 배포 가이드](https://vercel.com/docs/frameworks/full-stack/nextjs)

## 수정할 파일

- `app/page.tsx`: 메인 화면의 문구와 레이아웃
- `app/globals.css`: 기본 색상과 전역 스타일
- `app/layout.tsx`: 브라우저 제목과 설명
