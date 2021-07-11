// [version1, version2]
// version1 should be equivalent to version2
export default  [
  ['1.2.3', 'v1.2.3', true],
  ['1.2.3', '=1.2.3', true],
  ['1.2.3', 'v 1.2.3', true],
  ['1.2.3', '= 1.2.3', true],
  ['1.2.3', ' v1.2.3', true],
  ['1.2.3', ' =1.2.3', true],
  ['1.2.3', ' v 1.2.3', true],
  ['1.2.3', ' = 1.2.3', true],
  ['1.2.3-0', 'v1.2.3-0', true],
  ['1.2.3-0', '=1.2.3-0', true],
  ['1.2.3-0', 'v 1.2.3-0', true],
  ['1.2.3-0', '= 1.2.3-0', true],
  ['1.2.3-0', ' v1.2.3-0', true],
  ['1.2.3-0', ' =1.2.3-0', true],
  ['1.2.3-0', ' v 1.2.3-0', true],
  ['1.2.3-0', ' = 1.2.3-0', true],
  ['1.2.3-1', 'v1.2.3-1', true],
  ['1.2.3-1', '=1.2.3-1', true],
  ['1.2.3-1', 'v 1.2.3-1', true],
  ['1.2.3-1', '= 1.2.3-1', true],
  ['1.2.3-1', ' v1.2.3-1', true],
  ['1.2.3-1', ' =1.2.3-1', true],
  ['1.2.3-1', ' v 1.2.3-1', true],
  ['1.2.3-1', ' = 1.2.3-1', true],
  ['1.2.3-beta', 'v1.2.3-beta', true],
  ['1.2.3-beta', '=1.2.3-beta', true],
  ['1.2.3-beta', 'v 1.2.3-beta', true],
  ['1.2.3-beta', '= 1.2.3-beta', true],
  ['1.2.3-beta', ' v1.2.3-beta', true],
  ['1.2.3-beta', ' =1.2.3-beta', true],
  ['1.2.3-beta', ' v 1.2.3-beta', true],
  ['1.2.3-beta', ' = 1.2.3-beta', true],
  ['1.2.3-beta+build', ' = 1.2.3-beta+otherbuild', true],
  ['1.2.3+build', ' = 1.2.3+otherbuild', true],
  ['1.2.3-beta+build', '1.2.3-beta+otherbuild'],
  ['1.2.3+build', '1.2.3+otherbuild'],
  ['  v1.2.3+build', '1.2.3+otherbuild']
]