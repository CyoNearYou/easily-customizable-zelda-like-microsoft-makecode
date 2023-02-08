namespace SpriteKind {
    export const UI = SpriteKind.create()
    export const chest = SpriteKind.create()
    export const enitity = SpriteKind.create()
    export const entity = SpriteKind.create()
    export const key = SpriteKind.create()
    export const door = SpriteKind.create()
    export const UIpart = SpriteKind.create()
    export const bomb = SpriteKind.create()
    export const item = SpriteKind.create()
    export const openchset = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`hole_down_left_ur`, function (sprite, location) {
    info.changeScoreBy(-3)
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn4`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile0`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile3`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn1`)
    scene.centerCameraAt(camera.x + 10, camera.y + 5)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hole_corner_ur14`, function (sprite, location) {
    info.changeScoreBy(-3)
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn4`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile0`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile3`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn1`)
    scene.centerCameraAt(camera.x + 10, camera.y + 5)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hole_corner_ur`, function (sprite, location) {
    info.changeScoreBy(-3)
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn4`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile0`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile3`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn1`)
    scene.centerCameraAt(camera.x + 10, camera.y + 5)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hole_corner_ur9`, function (sprite, location) {
    info.changeScoreBy(-3)
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn4`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile0`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile3`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn1`)
    scene.centerCameraAt(camera.x + 10, camera.y + 5)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hole_up_down`, function (sprite, location) {
    info.changeScoreBy(-3)
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn4`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile0`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile3`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn1`)
    scene.centerCameraAt(camera.x + 10, camera.y + 5)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hole_corner_br`, function (sprite, location) {
    info.changeScoreBy(-3)
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn4`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile0`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile3`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn1`)
    scene.centerCameraAt(camera.x + 10, camera.y + 5)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (item == 0) {
        attacking = 1
        if (facing == 1) {
            animation.runImageAnimation(
            player_sprite,
            assets.animation`slashback`,
            100,
            false
            )
        } else if (facing == 2) {
            player_sprite.x += -8
            facing = 2.5
            animation.runImageAnimation(
            player_sprite,
            assets.animation`myAnim1`,
            100,
            false
            )
        } else if (facing == 3) {
            animation.runImageAnimation(
            player_sprite,
            assets.animation`myAnim0`,
            100,
            false
            )
        } else if (facing == 4) {
            animation.runImageAnimation(
            player_sprite,
            assets.animation`myAnim`,
            100,
            false
            )
        } else if (facing == 2.5) {
            animation.runImageAnimation(
            player_sprite,
            assets.animation`myAnim1`,
            100,
            false
            )
        }
        attacking = 0
    } else if (item == 1) {
        if (!(bombs == 0)) {
            if (bombing == 0) {
                bombobject.setImage(assets.image`bomb`)
                bombs += -1
                tiles.placeOnTile(bombobject, player_sprite.tilemapLocation())
                bombing = 1
                pause(2000)
                animation.runImageAnimation(
                bombobject,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 4 4 . . . . . . . 
                    . . . . . . 4 5 5 4 . . . . . . 
                    . . . . . . 2 5 5 2 . . . . . . 
                    . . . . . . . 2 2 . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . 4 . . . . . 
                    . . . . 2 . . . . 4 4 . . . . . 
                    . . . . 2 4 . . 4 5 4 . . . . . 
                    . . . . . 2 4 d 5 5 4 . . . . . 
                    . . . . . 2 5 5 5 5 4 . . . . . 
                    . . . . . . 2 5 5 5 5 4 . . . . 
                    . . . . . . 2 5 4 2 4 4 . . . . 
                    . . . . . . 4 4 . . 2 4 4 . . . 
                    . . . . . 4 4 . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . 3 . . . . . . . . . . . 4 . . 
                    . 3 3 . . . . . . . . . 4 4 . . 
                    . 3 d 3 . . 4 4 . . 4 4 d 4 . . 
                    . . 3 5 3 4 5 5 4 4 d d 4 4 . . 
                    . . 3 d 5 d 1 1 d 5 5 d 4 4 . . 
                    . . 4 5 5 1 1 1 1 5 1 1 5 4 . . 
                    . 4 5 5 5 5 1 1 5 1 1 1 d 4 4 . 
                    . 4 d 5 1 1 5 5 5 1 1 1 5 5 4 . 
                    . 4 4 5 1 1 5 5 5 5 5 d 5 5 4 . 
                    . . 4 3 d 5 5 5 d 5 5 d d d 4 . 
                    . 4 5 5 d 5 5 5 d d d 5 5 4 . . 
                    . 4 5 5 d 3 5 d d 3 d 5 5 4 . . 
                    . 4 4 d d 4 d d d 4 3 d d 4 . . 
                    . . 4 5 4 4 4 4 4 4 4 4 4 . . . 
                    . 4 5 4 . . 4 4 4 . . . 4 4 . . 
                    . 4 4 . . . . . . . . . . 4 4 . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . b b . b b b . . . . . 
                    . . . . b 1 1 b 1 1 1 b . . . . 
                    . . b b 3 1 1 d d 1 d d b b . . 
                    . b 1 1 d d b b b b b 1 1 b . . 
                    . b 1 1 1 b . . . . . b d d b . 
                    . . 3 d d b . . . . . b d 1 1 b 
                    . b 1 d 3 . . . . . . . b 1 1 b 
                    . b 1 1 b . . . . . . b b 1 d b 
                    . b 1 d b . . . . . . b d 3 d b 
                    . b b d d b . . . . b d d d b . 
                    . b d d d d b . b b 3 d d 3 b . 
                    . . b d d 3 3 b d 3 3 b b b . . 
                    . . . b b b d d d d d b . . . . 
                    . . . . . . b b b b b . . . . . 
                    `],
                125,
                false
                )
                if (bombobject.tileKindAt(TileDirection.Center, assets.tile`bombdoorfloor`)) {
                    tiles.setTileAt(bombobject.tilemapLocation(), sprites.dungeon.floorLight5)
                } else if (bombobject.tileKindAt(TileDirection.Center, assets.tile`bombdoorfloor`)) {
                    tiles.setTileAt(bombobject.tilemapLocation(), sprites.dungeon.floorLight2)
                } else if (bombobject.tileKindAt(TileDirection.Center, sprites.dungeon.greenOuterWest1)) {
                    tiles.setTileAt(bombobject.tilemapLocation(), sprites.dungeon.doorOpenWest)
                } else if (bombobject.tileKindAt(TileDirection.Center, sprites.dungeon.greenOuterEast1)) {
                    tiles.setTileAt(bombobject.tilemapLocation(), sprites.dungeon.doorOpenEast)
                } else if (bombobject.tileKindAt(TileDirection.Center, sprites.dungeon.greenOuterSouth0)) {
                    tiles.setTileAt(bombobject.tilemapLocation(), sprites.dungeon.doorOpenSouth)
                } else if (bombobject.tileKindAt(TileDirection.Center, sprites.dungeon.greenOuterNorth1)) {
                    tiles.setTileAt(bombobject.tilemapLocation(), sprites.dungeon.doorOpenNorth)
                }
                if (bombobject.tileKindAt(TileDirection.Left, assets.tile`bombdoorfloor`)) {
                    tiles.setTileAt(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Left), sprites.dungeon.floorLight5)
                } else if (bombobject.tileKindAt(TileDirection.Left, assets.tile`bombdoorfloor`)) {
                    tiles.setTileAt(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Left), sprites.dungeon.floorLight2)
                } else if (bombobject.tileKindAt(TileDirection.Left, sprites.dungeon.greenOuterWest1)) {
                    tiles.setTileAt(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Left), sprites.dungeon.doorOpenWest)
                } else if (bombobject.tileKindAt(TileDirection.Left, sprites.dungeon.greenOuterEast1)) {
                    tiles.setTileAt(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Left), sprites.dungeon.doorOpenEast)
                } else if (bombobject.tileKindAt(TileDirection.Left, sprites.dungeon.greenOuterSouth0)) {
                    tiles.setTileAt(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Left), sprites.dungeon.doorOpenSouth)
                } else if (bombobject.tileKindAt(TileDirection.Left, sprites.dungeon.greenOuterNorth1)) {
                    tiles.setTileAt(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Left), sprites.dungeon.doorOpenNorth)
                }
                if (bombobject.tileKindAt(TileDirection.Right, assets.tile`bombdoorfloor`)) {
                    tiles.setTileAt(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Right), sprites.dungeon.floorLight5)
                } else if (bombobject.tileKindAt(TileDirection.Right, assets.tile`bombdoorfloor`)) {
                    tiles.setTileAt(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Right), sprites.dungeon.floorLight2)
                } else if (bombobject.tileKindAt(TileDirection.Right, sprites.dungeon.greenOuterWest1)) {
                    tiles.setTileAt(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Right), sprites.dungeon.doorOpenWest)
                } else if (bombobject.tileKindAt(TileDirection.Right, sprites.dungeon.greenOuterEast1)) {
                    tiles.setTileAt(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Right), sprites.dungeon.doorOpenEast)
                } else if (bombobject.tileKindAt(TileDirection.Right, sprites.dungeon.greenOuterSouth0)) {
                    tiles.setTileAt(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Right), sprites.dungeon.doorOpenSouth)
                } else if (bombobject.tileKindAt(TileDirection.Right, sprites.dungeon.greenOuterNorth1)) {
                    tiles.setTileAt(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Right), sprites.dungeon.doorOpenNorth)
                }
                if (bombobject.tileKindAt(TileDirection.Top, assets.tile`bombdoorfloor`)) {
                    tiles.setTileAt(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Top), sprites.dungeon.floorLight5)
                } else if (bombobject.tileKindAt(TileDirection.Top, assets.tile`bombdoorfloor`)) {
                    tiles.setTileAt(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Top), sprites.dungeon.floorLight2)
                } else if (bombobject.tileKindAt(TileDirection.Top, sprites.dungeon.greenOuterWest1)) {
                    tiles.setTileAt(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Top), sprites.dungeon.doorOpenWest)
                } else if (bombobject.tileKindAt(TileDirection.Top, sprites.dungeon.greenOuterEast1)) {
                    tiles.setTileAt(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Top), sprites.dungeon.doorOpenEast)
                } else if (bombobject.tileKindAt(TileDirection.Top, sprites.dungeon.greenOuterSouth0)) {
                    tiles.setTileAt(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Top), sprites.dungeon.doorOpenSouth)
                } else if (bombobject.tileKindAt(TileDirection.Top, sprites.dungeon.greenOuterNorth1)) {
                    tiles.setTileAt(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Top), sprites.dungeon.doorOpenNorth)
                }
                if (bombobject.tileKindAt(TileDirection.Bottom, assets.tile`bombdoorfloor`)) {
                    tiles.setTileAt(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom), sprites.dungeon.floorLight5)
                } else if (bombobject.tileKindAt(TileDirection.Bottom, assets.tile`bombdoorfloor`)) {
                    tiles.setTileAt(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom), sprites.dungeon.floorLight2)
                } else if (bombobject.tileKindAt(TileDirection.Bottom, sprites.dungeon.greenOuterWest1)) {
                    tiles.setTileAt(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom), sprites.dungeon.doorOpenWest)
                } else if (bombobject.tileKindAt(TileDirection.Bottom, sprites.dungeon.greenOuterEast1)) {
                    tiles.setTileAt(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom), sprites.dungeon.doorOpenEast)
                } else if (bombobject.tileKindAt(TileDirection.Bottom, sprites.dungeon.greenOuterSouth0)) {
                    tiles.setTileAt(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom), sprites.dungeon.doorOpenSouth)
                } else if (bombobject.tileKindAt(TileDirection.Bottom, sprites.dungeon.greenOuterNorth1)) {
                    tiles.setTileAt(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom), sprites.dungeon.doorOpenNorth)
                }
                if (tiles.tileAtLocationEquals(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`bombdoorfloorcracked`)) {
                    tiles.setTileAt(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Bottom), sprites.dungeon.floorLight5)
                } else if (tiles.tileAtLocationEquals(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`bombdoorfloor`)) {
                    tiles.setTileAt(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Bottom), sprites.dungeon.floorLight2)
                } else if (tiles.tileAtLocationEquals(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Bottom), sprites.dungeon.greenOuterWest1)) {
                    tiles.setTileAt(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Bottom), sprites.dungeon.doorOpenWest)
                } else if (tiles.tileAtLocationEquals(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Bottom), sprites.dungeon.greenOuterEast1)) {
                    tiles.setTileAt(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Bottom), sprites.dungeon.doorOpenEast)
                } else if (tiles.tileAtLocationEquals(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Bottom), sprites.dungeon.greenOuterSouth0)) {
                    tiles.setTileAt(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Bottom), sprites.dungeon.doorOpenSouth)
                } else if (tiles.tileAtLocationEquals(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Bottom), sprites.dungeon.greenOuterNorth1)) {
                    tiles.setTileAt(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Bottom), sprites.dungeon.doorOpenNorth)
                }
                if (tiles.tileAtLocationEquals(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`bombdoorfloorcracked`)) {
                    tiles.setTileAt(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Bottom), sprites.dungeon.floorLight5)
                } else if (tiles.tileAtLocationEquals(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`bombdoorfloor`)) {
                    tiles.setTileAt(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Bottom), sprites.dungeon.floorLight2)
                } else if (tiles.tileAtLocationEquals(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Bottom), sprites.dungeon.greenOuterWest1)) {
                    tiles.setTileAt(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Bottom), sprites.dungeon.doorOpenWest)
                } else if (tiles.tileAtLocationEquals(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Bottom), sprites.dungeon.greenOuterEast1)) {
                    tiles.setTileAt(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Bottom), sprites.dungeon.doorOpenEast)
                } else if (tiles.tileAtLocationEquals(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Bottom), sprites.dungeon.greenOuterSouth0)) {
                    tiles.setTileAt(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Bottom), sprites.dungeon.doorOpenSouth)
                } else if (tiles.tileAtLocationEquals(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Bottom), sprites.dungeon.greenOuterNorth1)) {
                    tiles.setTileAt(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Bottom), sprites.dungeon.doorOpenNorth)
                }
                if (tiles.tileAtLocationEquals(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Top), assets.tile`bombdoorfloorcracked`)) {
                    tiles.setTileAt(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Top), sprites.dungeon.floorLight5)
                } else if (tiles.tileAtLocationEquals(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Top), assets.tile`bombdoorfloor`)) {
                    tiles.setTileAt(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Top), sprites.dungeon.floorLight2)
                } else if (tiles.tileAtLocationEquals(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Top), sprites.dungeon.greenOuterWest1)) {
                    tiles.setTileAt(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Top), sprites.dungeon.doorOpenWest)
                } else if (tiles.tileAtLocationEquals(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Top), sprites.dungeon.greenOuterEast1)) {
                    tiles.setTileAt(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Top), sprites.dungeon.doorOpenEast)
                } else if (tiles.tileAtLocationEquals(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Top), sprites.dungeon.greenOuterSouth0)) {
                    tiles.setTileAt(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Top), sprites.dungeon.doorOpenSouth)
                } else if (tiles.tileAtLocationEquals(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Top), sprites.dungeon.greenOuterNorth1)) {
                    tiles.setTileAt(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Top), sprites.dungeon.doorOpenNorth)
                }
                if (tiles.tileAtLocationEquals(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Top), assets.tile`bombdoorfloorcracked`)) {
                    tiles.setTileAt(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Top), sprites.dungeon.floorLight5)
                } else if (tiles.tileAtLocationEquals(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Top), assets.tile`bombdoorfloor`)) {
                    tiles.setTileAt(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Top), sprites.dungeon.floorLight2)
                } else if (tiles.tileAtLocationEquals(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Top), sprites.dungeon.greenOuterWest1)) {
                    tiles.setTileAt(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Top), sprites.dungeon.doorOpenWest)
                } else if (tiles.tileAtLocationEquals(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Top), sprites.dungeon.greenOuterEast1)) {
                    tiles.setTileAt(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Top), sprites.dungeon.doorOpenEast)
                } else if (tiles.tileAtLocationEquals(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Top), sprites.dungeon.greenOuterSouth0)) {
                    tiles.setTileAt(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Top), sprites.dungeon.doorOpenSouth)
                } else if (tiles.tileAtLocationEquals(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Top), sprites.dungeon.greenOuterNorth1)) {
                    tiles.setTileAt(bombobject.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Top), sprites.dungeon.doorOpenNorth)
                }
                pause(500)
                tiles.placeOnRandomTile(bombobject, assets.tile`bombspot`)
                bombing = 0
            }
        }
    } else if (item == 2) {
    	
    } else if (item == 3) {
    	
    } else if (item == 4) {
    	
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hole_corner_ur19`, function (sprite, location) {
    info.changeScoreBy(-3)
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn4`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile0`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile3`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn1`)
    scene.centerCameraAt(camera.x + 10, camera.y + 5)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hole_corner_ur13`, function (sprite, location) {
    info.changeScoreBy(-3)
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn4`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile0`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile3`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn1`)
    scene.centerCameraAt(camera.x + 10, camera.y + 5)
})
sprites.onDestroyed(SpriteKind.bomb, function (sprite) {
    bombing = 0
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hole_corner_ul0`, function (sprite, location) {
    info.changeScoreBy(-3)
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn4`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile0`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile3`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn1`)
    scene.centerCameraAt(camera.x + 10, camera.y + 5)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hole_left_right1`, function (sprite, location) {
    info.changeScoreBy(-3)
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn4`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile0`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile3`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn1`)
    scene.centerCameraAt(camera.x + 10, camera.y + 5)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hole_corner_ur5`, function (sprite, location) {
    info.changeScoreBy(-3)
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn4`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile0`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile3`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn1`)
    scene.centerCameraAt(camera.x + 10, camera.y + 5)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hole_up`, function (sprite, location) {
    info.changeScoreBy(-3)
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn4`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile0`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile3`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn1`)
    scene.centerCameraAt(camera.x + 10, camera.y + 5)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hole_corner_ur3`, function (sprite, location) {
    info.changeScoreBy(-3)
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn4`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile0`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile3`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn1`)
    scene.centerCameraAt(camera.x + 10, camera.y + 5)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hole_down_right`, function (sprite, location) {
    info.changeScoreBy(-3)
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn4`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile0`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile3`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn1`)
    scene.centerCameraAt(camera.x + 10, camera.y + 5)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hole_corner_ul`, function (sprite, location) {
    info.changeScoreBy(-3)
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn4`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile0`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile3`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn1`)
    scene.centerCameraAt(camera.x + 10, camera.y + 5)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    item += 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hole_corner_ur15`, function (sprite, location) {
    info.changeScoreBy(-3)
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn4`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile0`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile3`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn1`)
    scene.centerCameraAt(camera.x + 10, camera.y + 5)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hole_corner_ur2`, function (sprite, location) {
    info.changeScoreBy(-3)
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn4`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile0`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile3`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn1`)
    scene.centerCameraAt(camera.x + 10, camera.y + 5)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hole_down_right_ul`, function (sprite, location) {
    info.changeScoreBy(-3)
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn4`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile0`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile3`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn1`)
    scene.centerCameraAt(camera.x + 10, camera.y + 5)
})
sprites.onCreated(SpriteKind.UIpart, function (sprite) {
    sprite.z = 4
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`BombRefill`, function (sprite, location) {
    bombs = 5
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hole_corner_ur17`, function (sprite, location) {
    info.changeScoreBy(-3)
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn4`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile0`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile3`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn1`)
    scene.centerCameraAt(camera.x + 10, camera.y + 5)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`ButtonB`, function (sprite, location) {
    tileUtil.replaceAllTiles(assets.tile`ButtonB`, assets.tile`buttonBpressed`)
    tileUtil.replaceAllTiles(assets.tile`myTile4`, sprites.dungeon.doorOpenEast)
    tileUtil.replaceAllTiles(assets.tile`myTile8`, sprites.dungeon.doorOpenSouth)
    tileUtil.replaceAllTiles(assets.tile`myTile9`, sprites.dungeon.doorOpenWest)
    tileUtil.replaceAllTiles(assets.tile`myTile10`, sprites.dungeon.doorOpenNorth)
    sprites.destroyAllSpritesOfKind(SpriteKind.door)
    tileUtil.createSpritesOnTiles(sprites.dungeon.doorOpenNorth, assets.image`door_top`, SpriteKind.door)
    tileUtil.createSpritesOnTiles(sprites.dungeon.doorOpenSouth, assets.image`door_top1`, SpriteKind.door)
    tileUtil.createSpritesOnTiles(sprites.dungeon.doorOpenEast, assets.image`door_top0`, SpriteKind.door)
    tileUtil.createSpritesOnTiles(sprites.dungeon.doorOpenWest, assets.image`door_top2`, SpriteKind.door)
    tileUtil.createSpritesOnTiles(assets.tile`myTile13`, assets.image`door_top`, SpriteKind.door)
    tileUtil.createSpritesOnTiles(assets.tile`myTile16`, assets.image`door_top1`, SpriteKind.door)
    tileUtil.createSpritesOnTiles(assets.tile`myTile15`, assets.image`door_top0`, SpriteKind.door)
    tileUtil.createSpritesOnTiles(assets.tile`myTile14`, assets.image`door_top2`, SpriteKind.door)
    tileUtil.createSpritesOnTiles(assets.tile`myTile1`, assets.image`door_top`, SpriteKind.door)
    tileUtil.createSpritesOnTiles(assets.tile`myTile3`, assets.image`door_top1`, SpriteKind.door)
    tileUtil.createSpritesOnTiles(assets.tile`myTile0`, assets.image`door_top0`, SpriteKind.door)
    tileUtil.createSpritesOnTiles(assets.tile`myTile`, assets.image`door_top2`, SpriteKind.door)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hole_corner_ur12`, function (sprite, location) {
    info.changeScoreBy(-3)
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn4`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile0`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile3`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn1`)
    scene.centerCameraAt(camera.x + 10, camera.y + 5)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hole_corner_ur8`, function (sprite, location) {
    info.changeScoreBy(-3)
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn4`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile0`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile3`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn1`)
    scene.centerCameraAt(camera.x + 10, camera.y + 5)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hole_up_down0`, function (sprite, location) {
    info.changeScoreBy(-3)
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn4`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile0`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile3`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn1`)
    scene.centerCameraAt(camera.x + 10, camera.y + 5)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hole_down`, function (sprite, location) {
    info.changeScoreBy(-3)
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn4`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile0`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile3`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn1`)
    scene.centerCameraAt(camera.x + 10, camera.y + 5)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hole_right`, function (sprite, location) {
    info.changeScoreBy(-3)
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn4`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile0`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile3`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn1`)
    scene.centerCameraAt(camera.x + 10, camera.y + 5)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hole_corner_ur6`, function (sprite, location) {
    info.changeScoreBy(-3)
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn4`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile0`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile3`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn1`)
    scene.centerCameraAt(camera.x + 10, camera.y + 5)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hole_all`, function (sprite, location) {
    info.changeScoreBy(-3)
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn4`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile0`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile3`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn1`)
    scene.centerCameraAt(camera.x + 10, camera.y + 5)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hole_up_left`, function (sprite, location) {
    info.changeScoreBy(-3)
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn4`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile0`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile3`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn1`)
    scene.centerCameraAt(camera.x + 10, camera.y + 5)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hole_corner_ur7`, function (sprite, location) {
    info.changeScoreBy(-3)
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn4`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile0`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile3`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn1`)
    scene.centerCameraAt(camera.x + 10, camera.y + 5)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hole_corner_ur11`, function (sprite, location) {
    info.changeScoreBy(-3)
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn4`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile0`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile3`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn1`)
    scene.centerCameraAt(camera.x + 10, camera.y + 5)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.chest, function (sprite, otherSprite) {
    chest.setImage(assets.image`chest_open`)
    chest.setKind(SpriteKind.openchset)
    chest2 = randint(0, 3)
    if (chest2 == 0) {
        info.changeScoreBy(1)
    } else if (chest2 == 1) {
        info.changeScoreBy(5)
    } else if (chest2 == 2) {
        info.changeScoreBy(10)
    } else {
        info.changeScoreBy(15)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hole_left_right`, function (sprite, location) {
    info.changeScoreBy(-3)
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn4`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile0`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile3`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn1`)
    scene.centerCameraAt(camera.x + 10, camera.y + 5)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`buttonO`, function (sprite, location) {
    tileUtil.replaceAllTiles(assets.tile`buttonO`, assets.tile`buttonOpressed`)
    tileUtil.replaceAllTiles(assets.tile`myTile2`, sprites.dungeon.doorOpenEast)
    tileUtil.replaceAllTiles(assets.tile`myTile5`, sprites.dungeon.doorOpenSouth)
    tileUtil.replaceAllTiles(assets.tile`myTile6`, sprites.dungeon.doorOpenWest)
    tileUtil.replaceAllTiles(assets.tile`myTile7`, sprites.dungeon.doorOpenNorth)
    sprites.destroyAllSpritesOfKind(SpriteKind.door)
    tileUtil.createSpritesOnTiles(sprites.dungeon.doorOpenNorth, assets.image`door_top`, SpriteKind.door)
    tileUtil.createSpritesOnTiles(sprites.dungeon.doorOpenSouth, assets.image`door_top1`, SpriteKind.door)
    tileUtil.createSpritesOnTiles(sprites.dungeon.doorOpenEast, assets.image`door_top0`, SpriteKind.door)
    tileUtil.createSpritesOnTiles(sprites.dungeon.doorOpenWest, assets.image`door_top2`, SpriteKind.door)
    tileUtil.createSpritesOnTiles(assets.tile`myTile13`, assets.image`door_top`, SpriteKind.door)
    tileUtil.createSpritesOnTiles(assets.tile`myTile16`, assets.image`door_top1`, SpriteKind.door)
    tileUtil.createSpritesOnTiles(assets.tile`myTile15`, assets.image`door_top0`, SpriteKind.door)
    tileUtil.createSpritesOnTiles(assets.tile`myTile14`, assets.image`door_top2`, SpriteKind.door)
    tileUtil.createSpritesOnTiles(assets.tile`myTile1`, assets.image`door_top`, SpriteKind.door)
    tileUtil.createSpritesOnTiles(assets.tile`myTile3`, assets.image`door_top1`, SpriteKind.door)
    tileUtil.createSpritesOnTiles(assets.tile`myTile0`, assets.image`door_top0`, SpriteKind.door)
    tileUtil.createSpritesOnTiles(assets.tile`myTile`, assets.image`door_top2`, SpriteKind.door)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hole_right0`, function (sprite, location) {
    info.changeScoreBy(-3)
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn4`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile0`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile3`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn1`)
    scene.centerCameraAt(camera.x + 10, camera.y + 5)
})
sprites.onCreated(SpriteKind.door, function (sprite) {
    sprite.z = 2
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`buttonP`, function (sprite, location) {
    tileUtil.replaceAllTiles(assets.tile`buttonP`, assets.tile`buttonPpressed`)
    tileUtil.replaceAllTiles(assets.tile`myTile12`, sprites.dungeon.doorOpenEast)
    tileUtil.replaceAllTiles(assets.tile`myTile17`, sprites.dungeon.doorOpenSouth)
    tileUtil.replaceAllTiles(assets.tile`myTile18`, sprites.dungeon.doorOpenWest)
    tileUtil.replaceAllTiles(assets.tile`myTile11`, sprites.dungeon.doorOpenNorth)
    sprites.destroyAllSpritesOfKind(SpriteKind.door)
    tileUtil.createSpritesOnTiles(sprites.dungeon.doorOpenNorth, assets.image`door_top`, SpriteKind.door)
    tileUtil.createSpritesOnTiles(sprites.dungeon.doorOpenSouth, assets.image`door_top1`, SpriteKind.door)
    tileUtil.createSpritesOnTiles(sprites.dungeon.doorOpenEast, assets.image`door_top0`, SpriteKind.door)
    tileUtil.createSpritesOnTiles(sprites.dungeon.doorOpenWest, assets.image`door_top2`, SpriteKind.door)
    tileUtil.createSpritesOnTiles(assets.tile`myTile13`, assets.image`door_top`, SpriteKind.door)
    tileUtil.createSpritesOnTiles(assets.tile`myTile16`, assets.image`door_top1`, SpriteKind.door)
    tileUtil.createSpritesOnTiles(assets.tile`myTile15`, assets.image`door_top0`, SpriteKind.door)
    tileUtil.createSpritesOnTiles(assets.tile`myTile14`, assets.image`door_top2`, SpriteKind.door)
    tileUtil.createSpritesOnTiles(assets.tile`myTile1`, assets.image`door_top`, SpriteKind.door)
    tileUtil.createSpritesOnTiles(assets.tile`myTile3`, assets.image`door_top1`, SpriteKind.door)
    tileUtil.createSpritesOnTiles(assets.tile`myTile0`, assets.image`door_top0`, SpriteKind.door)
    tileUtil.createSpritesOnTiles(assets.tile`myTile`, assets.image`door_top2`, SpriteKind.door)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hole_corner_bl`, function (sprite, location) {
    info.changeScoreBy(-3)
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn4`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile0`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile3`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn1`)
    scene.centerCameraAt(camera.x + 10, camera.y + 5)
})
info.onLifeZero(function () {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hole_center`, function (sprite, location) {
    info.changeScoreBy(-3)
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn4`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile0`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile3`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn1`)
    scene.centerCameraAt(camera.x + 10, camera.y + 5)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hole_left_right0`, function (sprite, location) {
    info.changeScoreBy(-3)
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn4`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile0`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile3`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn1`)
    scene.centerCameraAt(camera.x + 10, camera.y + 5)
})
sprites.onCreated(SpriteKind.key, function (sprite) {
    sprite.z = 0
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hole_up_right`, function (sprite, location) {
    info.changeScoreBy(-3)
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn4`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile0`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile3`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn1`)
    scene.centerCameraAt(camera.x + 10, camera.y + 5)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hole_down_left`, function (sprite, location) {
    info.changeScoreBy(-3)
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn4`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile0`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile3`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn1`)
    scene.centerCameraAt(camera.x + 10, camera.y + 5)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hole_corner_ur16`, function (sprite, location) {
    info.changeScoreBy(-3)
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn4`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile0`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile3`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn1`)
    scene.centerCameraAt(camera.x + 10, camera.y + 5)
})
sprites.onCreated(SpriteKind.chest, function (sprite) {
    sprite.z = 0
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hole_up_right_bl`, function (sprite, location) {
    info.changeScoreBy(-3)
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn4`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile0`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile3`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn1`)
    scene.centerCameraAt(camera.x + 10, camera.y + 5)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.key, function (sprite, otherSprite) {
    sprites.destroy(key)
    tileUtil.replaceAllTiles(sprites.dungeon.doorLockedSouth, sprites.dungeon.doorOpenSouth)
    tileUtil.replaceAllTiles(sprites.dungeon.doorLockedWest, sprites.dungeon.doorOpenWest)
    tileUtil.replaceAllTiles(sprites.dungeon.doorLockedNorth, sprites.dungeon.doorOpenNorth)
    tileUtil.replaceAllTiles(sprites.dungeon.doorLockedEast, sprites.dungeon.doorOpenEast)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hole_corner_ur0`, function (sprite, location) {
    info.changeScoreBy(-3)
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn4`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile0`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile3`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn1`)
    scene.centerCameraAt(camera.x + 10, camera.y + 5)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hole_left`, function (sprite, location) {
    info.changeScoreBy(-3)
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn4`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile0`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile3`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn1`)
    scene.centerCameraAt(camera.x + 10, camera.y + 5)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hole_corner_ur18`, function (sprite, location) {
    info.changeScoreBy(-3)
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn4`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile0`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile3`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn1`)
    scene.centerCameraAt(camera.x + 10, camera.y + 5)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hole_right1`, function (sprite, location) {
    info.changeScoreBy(-3)
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn4`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile0`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile3`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn1`)
    scene.centerCameraAt(camera.x + 10, camera.y + 5)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hole_corner_ur10`, function (sprite, location) {
    info.changeScoreBy(-3)
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn4`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile0`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile3`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn1`)
    scene.centerCameraAt(camera.x + 10, camera.y + 5)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hole_right3`, function (sprite, location) {
    info.changeScoreBy(-3)
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn4`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile0`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile3`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn1`)
    scene.centerCameraAt(camera.x + 10, camera.y + 5)
})
sprites.onCreated(SpriteKind.UI, function (sprite) {
    sprite.z = 3
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hole_up_left_br`, function (sprite, location) {
    info.changeScoreBy(-3)
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn4`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile0`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile3`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn1`)
    scene.centerCameraAt(camera.x + 10, camera.y + 5)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hole_corner_ur4`, function (sprite, location) {
    info.changeScoreBy(-3)
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn4`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile0`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile3`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn1`)
    scene.centerCameraAt(camera.x + 10, camera.y + 5)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hole_corner_ur1`, function (sprite, location) {
    info.changeScoreBy(-3)
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn4`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile0`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile3`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn1`)
    scene.centerCameraAt(camera.x + 10, camera.y + 5)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hole_up_down1`, function (sprite, location) {
    info.changeScoreBy(-3)
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn4`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile0`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`myTile3`)
    tiles.placeOnRandomTile(player_sprite, assets.tile`spawn1`)
    scene.centerCameraAt(camera.x + 10, camera.y + 5)
})
let animating = 0
let chest2 = 0
let bombing = 0
let facing = 0
let attacking = 0
let bombobject: Sprite = null
let key: Sprite = null
let chest: Sprite = null
let player_sprite: Sprite = null
let camera: Sprite = null
let bombs = 0
let item = 0
item = 0
bombs = 5
scene.setBackgroundColor(12)
tiles.setCurrentTilemap(tilemap`test_dungeon`)
camera = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . c . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(camera, assets.tile`camera start`)
let doorfix = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . c . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.entity)
player_sprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
controller.moveSprite(player_sprite, 75, 75)
player_sprite.setStayInScreen(true)
player_sprite.setPosition(73, 104)
let sidebar = sprites.create(assets.image`ui`, SpriteKind.UI)
info.setScore(0)
info.setLife(3)
let sword = sprites.create(assets.image`sword1`, SpriteKind.UIpart)
let bombsprite = sprites.create(assets.image`bombs0`, SpriteKind.UIpart)
let pointer = sprites.create(assets.image`arrow`, SpriteKind.UIpart)
chest = sprites.create(assets.image`myImage2`, SpriteKind.chest)
tiles.placeOnRandomTile(chest, assets.tile`chest`)
key = sprites.create(assets.image`myImage0`, SpriteKind.key)
tiles.placeOnRandomTile(key, assets.tile`key`)
tiles.placeOnRandomTile(player_sprite, assets.tile`spawn4`)
tiles.placeOnRandomTile(player_sprite, assets.tile`myTile0`)
tiles.placeOnRandomTile(player_sprite, assets.tile`myTile3`)
tiles.placeOnRandomTile(player_sprite, assets.tile`spawn1`)
sprites.destroyAllSpritesOfKind(SpriteKind.door)
tileUtil.createSpritesOnTiles(sprites.dungeon.doorOpenNorth, assets.image`door_top`, SpriteKind.door)
tileUtil.createSpritesOnTiles(sprites.dungeon.doorOpenSouth, assets.image`door_top1`, SpriteKind.door)
tileUtil.createSpritesOnTiles(sprites.dungeon.doorOpenEast, assets.image`door_top0`, SpriteKind.door)
tileUtil.createSpritesOnTiles(sprites.dungeon.doorOpenWest, assets.image`door_top2`, SpriteKind.door)
tileUtil.createSpritesOnTiles(assets.tile`myTile13`, assets.image`door_top`, SpriteKind.door)
tileUtil.createSpritesOnTiles(assets.tile`myTile16`, assets.image`door_top1`, SpriteKind.door)
tileUtil.createSpritesOnTiles(assets.tile`myTile15`, assets.image`door_top0`, SpriteKind.door)
tileUtil.createSpritesOnTiles(assets.tile`myTile14`, assets.image`door_top2`, SpriteKind.door)
tileUtil.createSpritesOnTiles(assets.tile`spawn1`, assets.image`door_top`, SpriteKind.door)
tileUtil.createSpritesOnTiles(assets.tile`myTile3`, assets.image`door_top1`, SpriteKind.door)
tileUtil.createSpritesOnTiles(assets.tile`myTile0`, assets.image`door_top0`, SpriteKind.door)
tileUtil.createSpritesOnTiles(assets.tile`spawn4`, assets.image`door_top2`, SpriteKind.door)
scene.centerCameraAt(camera.x + 10, camera.y + 5)
bombobject = sprites.create(assets.image`bomb`, SpriteKind.bomb)
tiles.placeOnRandomTile(bombobject, assets.tile`bombspot`)
tileUtil.createSpritesOnTiles(assets.tile`BombRefill`, assets.image`bombcollect`, SpriteKind.item)
game.onUpdate(function () {
    tiles.placeOnRandomTile(doorfix, sprites.dungeon.doorOpenSouth)
    tiles.setWallAt(doorfix.tilemapLocation(), false)
    tiles.placeOnRandomTile(doorfix, sprites.dungeon.doorOpenNorth)
    tiles.setWallAt(doorfix.tilemapLocation(), false)
    tiles.placeOnRandomTile(doorfix, sprites.dungeon.doorOpenEast)
    tiles.setWallAt(doorfix.tilemapLocation(), false)
    tiles.placeOnRandomTile(doorfix, sprites.dungeon.doorOpenWest)
    tiles.setWallAt(doorfix.tilemapLocation(), false)
})
game.onUpdateInterval(1, function () {
    if (item == 0) {
        pointer.setPosition(scene.cameraProperty(CameraProperty.X), 18 + scene.cameraProperty(CameraProperty.Y))
    } else if (item == 1) {
        pointer.setPosition(scene.cameraProperty(CameraProperty.X), 30 + scene.cameraProperty(CameraProperty.Y))
    } else if (item == 2) {
        pointer.setPosition(135, 45)
        pointer.x += scene.cameraProperty(CameraProperty.X)
        pointer.y += scene.cameraProperty(CameraProperty.Y)
    } else if (item == 3) {
        pointer.setPosition(135, 60)
        pointer.x += scene.cameraProperty(CameraProperty.X)
        pointer.y += scene.cameraProperty(CameraProperty.Y)
    } else if (item == 4) {
        pointer.setPosition(135, 75)
        pointer.x += scene.cameraProperty(CameraProperty.X)
        pointer.y += scene.cameraProperty(CameraProperty.Y)
    }
})
game.onUpdateInterval(1, function () {
    sidebar.setPosition(scene.cameraProperty(CameraProperty.X), scene.cameraProperty(CameraProperty.Y))
    sword.setPosition(scene.cameraProperty(CameraProperty.X), scene.cameraProperty(CameraProperty.Y))
    bombsprite.setPosition(scene.cameraProperty(CameraProperty.X), scene.cameraProperty(CameraProperty.Y))
    player_sprite.z = 1
})
forever(function () {
    if (player_sprite.tileKindAt(TileDirection.Center, sprites.dungeon.doorOpenEast)) {
        scene.centerCameraAt(scene.cameraProperty(CameraProperty.X) + 144, scene.cameraProperty(CameraProperty.Y))
        pauseUntil(() => player_sprite.tileKindAt(TileDirection.Center, sprites.dungeon.floorLight2) || player_sprite.tileKindAt(TileDirection.Center, sprites.dungeon.floorLight5))
    } else if (player_sprite.tileKindAt(TileDirection.Center, sprites.dungeon.doorOpenWest)) {
        scene.centerCameraAt(scene.cameraProperty(CameraProperty.X) - 144, scene.cameraProperty(CameraProperty.Y))
        pauseUntil(() => player_sprite.tileKindAt(TileDirection.Center, sprites.dungeon.floorLight2) || player_sprite.tileKindAt(TileDirection.Center, sprites.dungeon.floorLight5))
    } else if (player_sprite.tileKindAt(TileDirection.Center, sprites.dungeon.doorOpenSouth)) {
        scene.centerCameraAt(scene.cameraProperty(CameraProperty.X), scene.cameraProperty(CameraProperty.Y) + 112)
        pauseUntil(() => player_sprite.tileKindAt(TileDirection.Center, sprites.dungeon.floorLight2) || player_sprite.tileKindAt(TileDirection.Center, sprites.dungeon.floorLight5))
    } else if (player_sprite.tileKindAt(TileDirection.Center, sprites.dungeon.doorOpenNorth)) {
        scene.centerCameraAt(scene.cameraProperty(CameraProperty.X), scene.cameraProperty(CameraProperty.Y) - 112)
        pauseUntil(() => player_sprite.tileKindAt(TileDirection.Center, sprites.dungeon.floorLight2) || player_sprite.tileKindAt(TileDirection.Center, sprites.dungeon.floorLight5))
    }
})
forever(function () {
    if (bombs == 1) {
        bombsprite.setImage(assets.image`bombs1`)
    } else if (bombs == 2) {
        bombsprite.setImage(assets.image`bombs2`)
    } else if (bombs == 3) {
        bombsprite.setImage(assets.image`bombs3`)
    } else if (bombs == 4) {
        bombsprite.setImage(assets.image`bombs4`)
    } else if (bombs == 5) {
        bombsprite.setImage(assets.image`bombs5`)
    } else {
        bombsprite.setImage(assets.image`bombs0`)
    }
})
forever(function () {
    if (bombs > 5) {
        bombs = 5
    } else if (bombs < 0) {
        bombs = 0
    }
})
forever(function () {
    if (item > 1) {
        item = 0
    }
})
forever(function () {
    if (controller.up.isPressed()) {
        facing = 0
        if (animating == 0) {
            animation.runImageAnimation(
            player_sprite,
            assets.animation`myAnim3`,
            200,
            true
            )
        }
    }
})
forever(function () {
    pauseUntil(() => controller.up.isPressed())
    animating = 1
    pauseUntil(() => !(controller.up.isPressed()))
    animating = 0
    animation.stopAnimation(animation.AnimationTypes.All, player_sprite)
})
forever(function () {
    if (controller.down.isPressed()) {
        facing = 3
        if (animating == 0) {
            animation.runImageAnimation(
            player_sprite,
            assets.animation`myAnim2`,
            200,
            true
            )
        }
    }
})
forever(function () {
    pauseUntil(() => controller.down.isPressed())
    animating = 1
    pauseUntil(() => !(controller.down.isPressed()))
    animating = 0
    animation.stopAnimation(animation.AnimationTypes.All, player_sprite)
})
forever(function () {
    pauseUntil(() => controller.left.isPressed())
    animating = 1
    pauseUntil(() => !(controller.left.isPressed()))
    animating = 0
    animation.stopAnimation(animation.AnimationTypes.All, player_sprite)
})
forever(function () {
    pauseUntil(() => controller.right.isPressed())
    animating = 1
    pauseUntil(() => !(controller.right.isPressed()))
    animating = 0
    animation.stopAnimation(animation.AnimationTypes.All, player_sprite)
})
forever(function () {
    if (controller.left.isPressed()) {
        facing = 2
        if (animating == 0) {
            animation.runImageAnimation(
            player_sprite,
            assets.animation`myAnim4`,
            200,
            true
            )
        }
    }
})
forever(function () {
    if (controller.right.isPressed()) {
        facing = 4
        if (animating == 0) {
            animation.runImageAnimation(
            player_sprite,
            assets.animation`myAnim5`,
            200,
            true
            )
        }
    }
})
forever(function () {
    if (info.score() > 99) {
        info.setScore(99)
    } else if (info.score() < 0) {
        info.setScore(99)
    }
})
forever(function () {
    if (player_sprite.tileKindAt(TileDirection.Center, assets.tile`floor_danger`)) {
        tiles.setTileAt(player_sprite.tilemapLocation(), assets.tile`hole_all`)
    }
})
