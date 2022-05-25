import { useRouter } from "next/router";
import { Wrapper, StyledButton, StyledParagraph } from "./Pagination.style";

const Pagination = ({ lastPage }) => {
  const router = useRouter();
  const currentPage = Number.parseInt(router.query.id + "");

  return (
    <Wrapper>
      <StyledButton
        disabled={currentPage === 1}
        onClick={() => {
          router.push({
            query: { id: currentPage - 1 },
          });
        }}
      >
        {"⬅"}
      </StyledButton>
      <StyledParagraph>{currentPage}</StyledParagraph>
      <StyledButton
        disabled={currentPage === lastPage}
        onClick={() => {
          router.push({ query: { id: currentPage + 1 } });
        }}
      >
        {"⮕"}
      </StyledButton>
    </Wrapper>
  );
};

export default Pagination;
