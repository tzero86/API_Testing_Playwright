import { expect, test } from '@playwright/test';


test('Update user post.', async ({ request }) => {
    const response = await request.patch('/posts/1', {
        data: {
            title: 'This is an updated Post title',
        }
    });

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(await response.json()).toEqual(expect.objectContaining({
        "title": "This is an updated Post title"
    }));
});