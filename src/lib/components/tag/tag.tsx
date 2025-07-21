import { Text } from "@fluentui/react";

const Tag = ({ description }: { description: string }) => (
  <div className="flex w-max p-2 rounded-full bg-gray-200 print">
    <Text variant="small">{description}</Text>
  </div>
);

export default Tag;
