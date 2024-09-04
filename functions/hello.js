exports.handler = async function (event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({
            name: 'ubing',
            age: 32,
            email: 'ubing0101@kakao.com'
        })
    }
}