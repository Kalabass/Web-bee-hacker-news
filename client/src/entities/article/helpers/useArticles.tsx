import { articleService } from '@/shared/api/articleService';
import { REFETCH_INTERVAL_MS } from '@/shared/const/RefetchIntervalMS';

import { useQuery } from '@tanstack/react-query';

export const useArticles = () => {
  return useQuery({
    queryFn: () => articleService.getAll(),
    queryKey: ['articles'],
    refetchInterval: REFETCH_INTERVAL_MS,
  });
};
