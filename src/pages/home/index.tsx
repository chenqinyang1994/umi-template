import { useEffect } from 'react';
import { message, DatePicker } from 'antd';
import type { DatePickerProps } from 'antd';
import styles from './index.less';

export default function IndexPage() {
  useEffect(() => {
    message.success(123);
  }, []);
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <DatePicker onChange={onChange} picker="week"></DatePicker>
    </div>
  );
}