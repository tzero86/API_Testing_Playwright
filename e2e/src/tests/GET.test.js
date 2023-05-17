import { expect, test } from '@playwright/test';


test('Retrieve user posts.', async ({ request }) => {
    const response = await request.get('/posts');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
});

test('Retrieve user post.', async ({ request }) => {
    const response = await request.get('/posts/1');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(await response.json()).toEqual(expect.objectContaining({
        "id": 1,
        "userId": 1,
    }));
});