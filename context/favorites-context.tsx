import { createContext, PropsWithChildren, useContext, useMemo, useState } from 'react';

type FavoritesContextValue = {
  favoriteIds: string[];
  isFavorite: (eventId: string) => boolean;
  toggleFavorite: (eventId: string) => void;
};

const FavoritesContext = createContext<FavoritesContextValue | undefined>(undefined);

export function FavoritesProvider({ children }: PropsWithChildren) {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  const value = useMemo(
    () => ({
      favoriteIds,
      isFavorite: (eventId: string) => favoriteIds.includes(eventId),
      toggleFavorite: (eventId: string) => {
        setFavoriteIds((current) =>
          current.includes(eventId)
            ? current.filter((id) => id !== eventId)
            : [...current, eventId],
        );
      },
    }),
    [favoriteIds],
  );

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }

  return context;
}
