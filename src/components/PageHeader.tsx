import { IconButton, Separator, Text } from "@fluentui/react";

interface PageHeaderProps {
  title?: string;
  isVisibleButtons?: boolean;
  onClickNavigateBack?: () => void;
}

const PageHeader = ({
  title,
  isVisibleButtons = false,
  onClickNavigateBack,
}: PageHeaderProps) => (
  <>
    <div className="w-full flex flex-col s:flex-row s:justify-between s:items-center">
      <Text variant="xxLargePlus" className="text-xl sm:text-3xl">
        {title}
      </Text>
      {isVisibleButtons ? (
        <div className="flex">
          <IconButton
            className="print:hidden"
            iconProps={{ iconName: "NavigateBack", style: { fontSize: 20 } }}
            title="Atrás"
            ariaLabel="Atrás"
            onClick={onClickNavigateBack}
          />
          <IconButton
            className="print:hidden"
            iconProps={{ iconName: "Print", style: { fontSize: 20 } }}
            title="Imprimir"
            ariaLabel="Imprimir"
            onClick={() => window.print()}
          />
        </div>
      ) : null}
    </div>
    <Separator className="print" />
  </>
);

export default PageHeader;
