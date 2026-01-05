# Vercel 배포 가이드

이 문서는 Talk 2 Sheet 프로젝트를 Vercel에 배포하는 방법을 설명합니다.

## ✅ 배포 전 체크리스트

### 1. 빌드 테스트 (완료)
- [x] 로컬 빌드 성공 (`npm run build`)
- [x] 빌드 오류 수정 완료 (useSearchParams Suspense 오류)

### 2. Git 저장소 확인
- [x] 코드가 GitHub에 푸시되어 있는지 확인
- 저장소 URL: `https://github.com/yuna0310k-SSONG/Talk_2_Sheet`

### 3. 환경 변수 확인
- 현재 프로젝트는 환경 변수가 필요하지 않습니다.
- 클라이언트 사이드에서만 동작하므로 백엔드 설정 불필요

## 🚀 Vercel 배포 방법

### 방법 1: Vercel 웹 대시보드 사용 (권장)

#### 1단계: Vercel 계정 생성/로그인
1. [Vercel 웹사이트](https://vercel.com) 접속
2. "Sign Up" 또는 "Log In" 클릭
3. GitHub 계정으로 로그인 (권장)

#### 2단계: 프로젝트 Import
1. Vercel 대시보드에서 "Add New..." → "Project" 클릭
2. GitHub 저장소 선택 화면에서 `yuna0310k-SSONG/Talk_2_Sheet` 선택
3. "Import" 클릭

#### 3단계: 프로젝트 설정 확인
Vercel이 자동으로 Next.js 프로젝트를 감지하므로 기본 설정으로 진행 가능:

**프로젝트 설정:**
- **Framework Preset**: Next.js (자동 감지)
- **Root Directory**: `./` (기본값)
- **Build Command**: `npm run build` (자동 감지)
- **Output Directory**: `.next` (자동 감지)
- **Install Command**: `npm install` (자동 감지)

**환경 변수:**
- 현재 환경 변수 설정 불필요 (추가하지 않아도 됨)

#### 4단계: 배포
1. "Deploy" 버튼 클릭
2. 배포 완료 대기 (약 1-2분)
3. 배포 완료 후 제공되는 URL 확인

### 방법 2: Vercel CLI 사용

#### 1단계: Vercel CLI 설치
```bash
npm install -g vercel
```

#### 2단계: 로그인
```bash
vercel login
```

#### 3단계: 프로젝트 배포
```bash
# 프로젝트 루트 디렉토리에서 실행
vercel
```

첫 배포 시 질문이 나오면:
- Set up and deploy? **Y**
- Which scope? (본인의 계정 선택)
- Link to existing project? **N**
- Project name? `talk-2-sheet` (또는 원하는 이름)
- Directory? `./` (Enter로 기본값)
- Override settings? **N**

#### 4단계: 프로덕션 배포
```bash
vercel --prod
```

## 📋 배포 후 확인 사항

### 1. 배포 상태 확인
- Vercel 대시보드에서 배포 상태 확인
- 모든 빌드가 성공했는지 확인

### 2. 기능 테스트
배포된 사이트에서 다음 기능들이 정상 작동하는지 확인:
- [ ] 랜딩 페이지 로드
- [ ] 파일 업로드 기능
- [ ] 미리보기 및 필터링 기능
- [ ] 파일 변환 및 다운로드 기능 (Excel, CSV, PDF)

### 3. 도메인 설정 (선택사항)
1. Vercel 대시보드 → 프로젝트 → Settings → Domains
2. 커스텀 도메인 추가 (예: `talk2sheet.com`)

## ⚙️ Vercel 설정 상세

### Build & Development Settings
Vercel 대시보드에서 다음 설정을 확인/수정할 수 있습니다:

**Settings → General:**
- Framework: Next.js
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`
- Node.js Version: 18.x (또는 20.x)

**Settings → Environment Variables:**
- 현재 환경 변수 불필요
- 필요 시 여기서 추가 가능

### 자동 배포 설정
기본적으로 Vercel은 GitHub의 `main` 또는 `master` 브랜치에 푸시될 때마다 자동으로 배포됩니다.

**Settings → Git:**
- Production Branch: `master` (또는 `main`)
- Auto-deploy: 활성화됨 (기본값)

## 🐛 문제 해결

### 빌드 실패
1. **오류 로그 확인**: Vercel 대시보드 → Deployments → 실패한 배포 → Logs
2. **로컬 빌드 테스트**: `npm run build` 실행하여 로컬에서 오류 확인
3. **의존성 문제**: `package.json`의 의존성 버전 확인

### 환경 변수 오류
- 현재 프로젝트는 환경 변수가 필요하지 않습니다
- 필요 시 Vercel 대시보드 → Settings → Environment Variables에서 추가

### 배포 속도 최적화
1. **빌드 캐싱**: Vercel이 자동으로 처리
2. **이미지 최적화**: Next.js Image 컴포넌트 사용 시 자동 최적화
3. **Edge Functions**: 필요 시 Edge Functions 활용

### 도메인 연결 문제
1. DNS 설정 확인
2. Vercel DNS 서버 사용 권장
3. SSL 인증서는 자동 발급 (Let's Encrypt)

## 📝 추가 참고사항

### 성능 모니터링
- Vercel Analytics (선택사항): 대시보드에서 활성화 가능
- Real User Monitoring: 사용자 경험 모니터링

### 환경별 배포
- **Production**: `master` 브랜치 (자동 배포)
- **Preview**: Pull Request 생성 시 자동 배포
- **Development**: 필요 시 `vercel dev` 명령어로 로컬 개발

### 롤백
배포 실패 시:
1. Vercel 대시보드 → Deployments
2. 이전 성공한 배포 선택
3. "Promote to Production" 클릭

## 🔗 유용한 링크

- [Vercel 공식 문서](https://vercel.com/docs)
- [Next.js 배포 가이드](https://nextjs.org/docs/deployment)
- [Vercel CLI 문서](https://vercel.com/docs/cli)
- [프로젝트 GitHub](https://github.com/yuna0310k-SSONG/Talk_2_Sheet)

---

**배포 완료 후 배포된 URL을 README에 추가하는 것을 권장합니다.**

