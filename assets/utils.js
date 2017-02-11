import cssVars from '!!sass-variable-loader!~/assets/global.sass'

export const dist = ([x, y], [xt, yt]) => Math.sqrt(((xt - x) ** 2) + ((yt - y) ** 2))
export const vars = cssVars
