import { useRouter } from "next/router";
import { Wrapper, StyledParagraph } from "./Pagination.style";
import { Button } from "src/components/atoms/Button/Button";

type Props = { lastPage: number };

const Pagination = ({ lastPage }: Props) => {
  const router = useRouter();
  const currentPage = Number.parseInt(router.query.id + "");

  return (
    <Wrapper>
      <Button
        disabled={currentPage === 1}
        onClick={() => {
          router.push({ query: { id: currentPage - 1 } });
        }}
      >
        {"⬅"}
      </Button>
      <StyledParagraph>{currentPage}</StyledParagraph>
      <Button
        disabled={currentPage === lastPage}
        onClick={() => {
          router.push({ query: { id: currentPage + 1 } });
        }}
      >
        {"⮕"}
      </Button>
    </Wrapper>
  );
};

export default Pagination;
