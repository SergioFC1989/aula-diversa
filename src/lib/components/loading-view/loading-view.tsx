import { Separator, Spinner, Text } from "@fluentui/react";

interface LoadingViewProps {
  title: string;
  message: string;
}

const LoadingView = ({ title, message }: LoadingViewProps) => (
  <>
    <Text variant="xLarge" className="text-base sm:text-lg">
      {title}
    </Text>
    <Separator />
    <Spinner className="flex justify-start items-start" label={message} ariaLive="assertive" labelPosition="right" />
  </>
);

export default LoadingView;
