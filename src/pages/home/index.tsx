import { useEffect } from 'react';
import { message, DatePicker } from 'antd';
import type { DatePickerProps } from 'antd';
import moment from 'moment';
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
      <h1 className={styles.title}>Page home</h1>
      <DatePicker
        defaultValue={moment()}
        onChange={onChange}
        picker="week"
      ></DatePicker>
    </div>
  );
}
