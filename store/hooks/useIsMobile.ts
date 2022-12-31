import { useMediaQuery, useTheme } from '@mui/material';

export function useIsMobile() {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down('sm'));
}

export function useIsMobileMD() {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down('md'));
}

export function useIsMobileLG() {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down('lg'));
}
