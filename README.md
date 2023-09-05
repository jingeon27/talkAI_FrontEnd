# TalkAi

개발기간: 2023-06-07~2023-07-12

https://github.com/jingeon27/talkAI_BackEnd

https://github.com/jingeon27/talkAI_FrontEnd

## 소개(풀스택 프로젝트)

---

openai를 활용하여 chatbot과 대화하는 서비스

- 성격유형 지정
- 대화상대 이름 지정
- 대화목록
- 이어서 대화하기
- 음성인식으로 대화하기
- 간편 로그인(naver,google,kakao oauth)

*시연영상

https://drive.google.com/file/d/1084pliJEA23zOEmEI-vPeLOWB1rDLM27/view?usp=sharing

## 사용 기술

---

client: nextjs, styled-components, apollo/client, storybook, typescript

backend: nestjs, apollo/server, typeorm, mysql2 

## 구성

---

### 백엔드

백엔드의 경우 폴더 구성을 apis에서 도메인별로 분리하였습니다.

common에선 공통적으로 사용하는 schema나 scalar, interface를 정의해주었습니다.

graphql을 사용하였고, 코드우선 방식으로 개발하였습니다.

### 프론트

nextjs 13버전의 app router을 사용

client 상태는 context를 사용 

비동기 상태는 apollo를 사용

상세페이지와 메인페이지 ui가 동일시 되기에 templates로 만들었습니다.

user정보를 전역상태로 관리하고 chat의 상태는 pages 단위로 관리하여 props drilling을 방지하고 재사용성을 높였습니다.

내부적으로 제공하는 suspense로 페이지를 감싸면 error.tsx나 loading.tsx로 fallback되는 것을 활용하여 chat부분에서 선언적으로 비동기 함수를 처리하였습니다.

## 회고

---

useEffect를 사용하여 데이터 호출로직을 짜다 보니, 데이터 호출하는 부분이 클라이언트 쪽으로 위임되게 되었고, 추후 블로그와 공식문서를 보고 난 뒤 아래 방식대로 호출로직을 서버로 돌리는 방법을 있다는 것을 깨닫게 되었습니다.

```tsx
import { getClient } from "@/lib/client";

import { gql } from "@apollo/client";

const query = gql`query Now {
    now(id: "1")
}`;

export default async function Page() {
  const { data } = await getClient().query({ query });

  return <main>{data.now}</main>;
}
```

초기에 servercomponent와 clientcomponent에 대한 이해가 부족한 상태로 개발하여, servercomponent를 100%활용하지 못해 아쉬움이 남게 되었습니다.

## 여담

---

저렇게 어플리케이션을 구성한 후 ai 이미지와 사용자 이미지 기능을 추가하였습니다.

배포를 진행했었으나, 개발을 진행할 땐 openai key가 요청 몇번까진 무료였지만, 현재 전부 유로로 전환되어 내리게 되었습니다.
