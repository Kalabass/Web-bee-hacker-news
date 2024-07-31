import { useComments } from '@/entities/comment';
import { PageContainer } from '@/shared/ui/PageContainer';
import { RefetchButton } from '@/shared/ui/RefetchButton';
import { ArticleComments } from '@/widgets/article-comments';
import { ArticleContent } from '@/widgets/article-content';
import { NavBar } from '@/widgets/nav-bar';
import { Paper } from '@mui/material';
import { FC } from 'react';
import { useParams } from 'react-router-dom';

export const ArticlePage: FC = () => {
  const { id } = useParams();
  const commentsQuery = useComments(+id!);

  return (
    <>
      <NavBar
        children={<RefetchButton entity='comments' query={commentsQuery} />}
      />
      <PageContainer>
        <Paper elevation={2} sx={{ padding: 2 }}>
          <ArticleContent id={+id!} />
          <ArticleComments {...commentsQuery} />
        </Paper>
      </PageContainer>
    </>
  );
};
