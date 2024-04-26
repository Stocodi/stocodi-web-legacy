## `/api`

서버와 HTTP 통신을 위한 설정파일, 서비스 레이어가 구현되어 있습니다

`/config` CRUD API 호출을 추상화한 객체리터럴과 환경변수, 쿠키 설정 등이 구현된 디렉토리입니다
<br/>
`/interface` 각 요청에 대한 Request Body, Response Body 의 타입 / 인터페이스가 정의된 디렉토리입니다.
<br/>
`/services` 각 도메인별 API 호출을 추상화한 디렉토리입니다

## `/assets`

프로젝트에 사용되는 정적 에셋이 저장되는 디렉토리입니다

## `/components`

프로젝트에 공통적으로 사용되는 컴포넌트가 구현된 디렉토리입니다

`/display` Avatar, Badge 와 같은 디스플레이 관련 컴포넌트가 구현되어 있습니다
<br/>
`/feedback` Loader, Spinner 등 사용자와 상호작용 과정에서 필요한 피드백 컴포넌트가 구현되어 있습니다
<br/>
`/forms` Input, Checkbox 등 사용자와 상호작용 및 입력 처리에 관한 컴포넌트가 구현되어 있습니다
<br/>
`/guards` Access, Refresh 토큰에 따라 보여줄 컴포넌트를 분기 할 컴포넌트가 구현되어 있습니다
<br/>
`/layouts` React Router DOM 의 Outlet 컴포넌트를 사용하는 레이아웃 컴포넌트가 구현되어 있습니다
<br/>
`/navigation` Nav, NavAside 와 같은 라우팅 관련 컴포넌트가 구현되어 있습니다
<br/>
`/overlay` Modal 과 같은 오버레이 컴포넌트가 구현되어 있습니다

## `/constants`

프로젝트에 사용되는 상수가 정의되어있는 디렉토리입니다

## `/fonts`

프로젝트에 사용되는 폰트가 정의되어있는 디렉토리입니다

## `/hooks`

커스텀 훅이 구현되어있는 디렉토리입니다

## `/pages`

라우팅별로 하위 디렉토리가 나눠져 있습니다<br/>
하위 디렉토리에는 해당 Path 에서만 사용되는 components 디렉토리가 존재합니다

## `/store`

Redux 와 관련된 전역상태 storage, slice, action, thunk 가 구현된 디렉토리입니다

## `/utils`

유틸리티 함수가 구현되어있는 디렉토리입니다
