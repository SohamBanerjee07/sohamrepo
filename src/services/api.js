const BASE_URL = 'http://localhost:8185';

export async function fetchData(endpoint) {
  const response = await fetch(`${BASE_URL}${endpoint}`);
  if (!response.ok) {
    throw new Error('Request failed');
  }
  return response.json();
}

export async function postData(endpoint, data) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      credentials: 'include', // Add this if backend requires credentials
    });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Request failed: ${response.status} - ${errorText}`);
    }
    return response.json();
  } catch (error) {
    console.error('Fetch error:', error.message);
    throw error;
  }
}