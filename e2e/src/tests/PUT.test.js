import { expect, test } from '@playwright/test';


test('Update user post.', async ({ request }) => {
    const response = await request.put('/posts/1', {
        data: {
            id: 1,
            title: 'This is an updated Post title',
            body: 'This is the content of the updated post.',
            userId: 1
        }
    })

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(await response.json()).toEqual(expect.objectContaining({
        "id": 1,
        "title": "This is an updated Post title",
        "body": "This is the content of the updated post.",
        "userId": 1
    }));
});


test('Update user post with invalid id.', async ({ request }) => {
    const response = await request.put('/posts/101', {
        data: {
            id: 101,
            title: 'This is an updated Post title',
            body: 'This is the content of the updated post.',
            userId: 1
        }
    });

    expect(response.ok()).toBeFalsy();
    expect(response.status()).toBe(500);
    expect(response.statusText()).toEqual('Internal Server Error');
    expect(await response.text()).toContain('Cannot read properties of undefined (reading \'id\')');
});