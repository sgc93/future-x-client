export const extractVideoId = (url: string): string | null => {
  const VID_REGEX = /(?:youtube(?:-nocookie)?\.com\/(?:watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/

  const matches = url.match(VID_REGEX);
  return matches ? matches[1] : null;
}

export const isValidYouTubeId = (id: string) => {
  return /^[a-zA-Z0-9_-]{11}$/.test(id);
};
