export async function getLaunches() {
  const response = await fetch('/api/launches');

  return await response.json();
}