export const random = (num) => Math.ceil(Math.random() * num);

export const countBtn = (count, $el) => {
    const $span = $el.querySelector('.count');

    return () => {
        count--;
        if ($span) $span.innerText = count;

        if (count === 0) {
            $el.disabled = true;
        }
    };
};