import { Spinner } from "@fluentui/react";
import PageHeader from "../page-header/page-header";

interface LoadingViewProps {
  title: string;
  message: string;
}

const LoadingView = ({ title, message }: LoadingViewProps) => (
  <>
    <PageHeader title={title} />
    <Spinner
      className="flex justify-start items-start"
      label={message}
      ariaLive="assertive"
      labelPosition="right"
    />
  </>
);

export default LoadingView;
