# 랜덤 이름 생성기 (Random Name Generator)

## 📝 프로젝트 소개
이 프로젝트는 React와 Vite를 기반으로 한 랜덤 이름 생성 웹 애플리케이션입니다. 사용자가 원하는 수만큼의 랜덤 이름을 생성할 수 있습니다.

## 🛠 기술 스택
- React 18.3.1
- Vite 6.0.1
- TailwindCSS 3.4.17
- JavaScript

## ⚙ 주요 기능
- 최대 10개까지 랜덤 이름 생성
- 성(surname)과 이름(given name) 조합
- 실시간 이름 생성 및 표시
- 사용자 친화적인 인터페이스

## 🚀 시작하기

### 사전 요구사항
- Node.js 설치
- npm (Node Package Manager)

### 설치 방법
```shell script
# 저장소 복제
git clone [저장소 URL]

# 프로젝트 디렉토리로 이동
cd random-name-generator

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

### 빌드 방법
```shell script
# 프로덕션용 빌드
npm run build

# 빌드된 버전 미리보기
npm run preview
```

## 💻 사용 방법
1. 생성하고 싶은 이름의 개수를 입력합니다 (1-10 사이)
2. "Generate" 버튼을 클릭합니다
3. 생성된 이름 목록을 확인합니다

## 🎨 UI/UX 특징
- 모던한 사이안(cyan) 컬러 테마
- 반응형 디자인
- 직관적인 사용자 인터페이스
- 에러 처리 및 사용자 피드백

## ⚠️ 제한사항
- 한 번에 최대 10개까지의 이름만 생성 가능
- 누적 생성 횟수 10회 제한

## 🔧 개발 스크립트
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "lint": "eslint .",
  "preview": "vite preview"
}
```

## 📦 의존성
### 주요 의존성
```json
"dependencies": {
  "react": "^18.3.1",
  "react-dom": "^18.3.1"
}
```

### 개발 의존성
```json
"devDependencies": {
  "@vitejs/plugin-react": "^4.3.4",
  "tailwindcss": "^3.4.17",
  "vite": "^6.0.1"
  // 기타 개발 도구...
}
```

## 🤝 기여하기
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 라이선스
이 프로젝트는 MIT 라이선스 하에 배포됩니다.

---
*이 README는 프로젝트의 기본적인 정보를 제공합니다. 필요에 따라 내용을 수정하거나 확장할 수 있습니다.*