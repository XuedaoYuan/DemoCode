// @ts-nocheck
import { createSignal, mergeProps, splitProps } from 'solid-js';
interface Props {
  name?: string;
  age?: number;
}
export default function Person(props: Props) {
  // 合并属性用于设置默认值
  const mergedProps = mergeProps({ name: '匿名', age: 0 }, props);
  // 分离属性用于精准传递子组件
  const [selfProps, otherProps] = splitProps(mergedProps, ['name', 'age']);
  return (
    <ul style={{ width: '200px', border: '1px solid #aaa' }}>
      <li>
        <h4>个人信息</h4>
      </li>
      <li>name: {selfProps.name}</li>
      <li>age: {selfProps.age}</li>
      <li>
        other:
        <pre>{JSON.stringify(otherProps, null, 2)}</pre>
      </li>
    </ul>
  );
}
