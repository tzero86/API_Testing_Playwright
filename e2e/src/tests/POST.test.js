import { expect, test } from '@playwright/test';


test('Create user post.', async ({ request }) => {
    const response = await request.post('/posts', {
        data: {
            title: 'This is a new Post',
            body: 'This is the content of the new post.',
            userId: 1
        }
    });

    expect(response.status()).toBe(201);
    expect(await response.json()).toEqual(expect.objectContaining({
        "id": 101,
        "title": 'This is a new Post',
        "body": 'This is the content of the new post.',
        "userId": 1
    }));
});