# useMemo와 useCallback의 차이점

React에서 `useMemo`와 `useCallback`은 성능 최적화를 위해 사용되는 훅입니다. 둘 다 값이나 함수를 "메모이제이션"하여 불필요한 연산이나 렌더링을 줄이는 역할을 합니다. 하지만 용도가 다릅니다. 쉽게 설명하면 다음과 같습니다:

---

## 1. `useMemo`: 값(결과)을 메모이제이션

- **목적:** 계산 결과(값)를 재사용하려고 사용.
- 복잡한 계산이나 연산 결과를 캐싱해서 렌더링 시 불필요한 계산을 방지.
- **언제 사용?**
  - 값(예: 숫자, 배열, 객체)을 계산하는 데 시간이 오래 걸리는 경우.
  - 해당 값이 바뀌지 않으면, 이전에 계산한 값을 재사용하고 싶을 때.

### 사용 예제:

```jsx
import React, { useMemo } from 'react';

function ExpensiveCalculationComponent({ number }) {
  // 복잡한 계산을 메모이제이션
  const calculatedValue = useMemo(() => {
    console.log("복잡한 계산 실행 중...");
    return number * 1000; // 예시로 단순한 연산
  }, [number]); // number가 변경될 때만 계산

  return <div>계산 결과: {calculatedValue}</div>;
}
```

> **설명:** `number`가 변하지 않으면 "복잡한 계산 실행 중..."이 다시 실행되지 않고, 이전 결과를 그대로 사용합니다.

---

## 2. `useCallback`: 함수(동작)를 메모이제이션

- **목적:** 함수 자체를 재사용하려고 사용.
- 컴포넌트가 리렌더링될 때 새로운 함수 생성(참조 변경)을 방지.
- **언제 사용?**
  - 자식 컴포넌트에 props로 함수를 전달할 때.
  - 함수가 자주 생성되거나 의존성으로 인해 불필요한 렌더링이 발생할 때.

### 사용 예제:

```jsx
import React, { useCallback } from 'react';

function Button({ onClick }) {
  console.log("Button 렌더링");
  return <button onClick={onClick}>클릭</button>;
}

function ParentComponent() {
  const handleClick = useCallback(() => {
    console.log("버튼 클릭!");
  }, []); // 의존성 배열이 비어 있으면 함수가 변하지 않음

  return <Button onClick={handleClick} />;
}
```

> **설명:** `useCallback`을 사용하면 `handleClick` 함수가 리렌더링 때마다 새로 생성되지 않으므로, `Button` 컴포넌트가 불필요하게 렌더링되지 않습니다.

---

## 간단 비교:

| **훅**          | **주요 대상**           | **결과**                             | **언제 사용?**                                      |
|-----------------|-----------------------|-------------------------------------|---------------------------------------------------|
| **`useMemo`**   | 값(계산 결과)          | 복잡한 계산의 결과를 캐싱           | 값 계산이 비싸거나, 값이 자주 재계산되는 경우      |
| **`useCallback`** | 함수(동작)            | 함수를 캐싱                          | 함수를 자식 컴포넌트에 전달하거나, 자주 생성되는 경우 |

둘을 구분하는 핵심은 **`useMemo`는 값, `useCallback`은 함수**를 메모이제이션한다는 점입니다.
