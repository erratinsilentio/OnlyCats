type Scalars = {
  readonly ID: string;
  readonly Boolean: boolean;
  readonly String: string;
  readonly Int: number;
  readonly Float: number;
  readonly JSON: import('@keystone-next/types').JSONValue;
};

export type CartItemRelateToManyInput = {
  readonly create?: ReadonlyArray<CartItemCreateInput | null> | null;
  readonly connect?: ReadonlyArray<CartItemWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<CartItemWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type OrderRelateToManyInput = {
  readonly create?: ReadonlyArray<OrderCreateInput | null> | null;
  readonly connect?: ReadonlyArray<OrderWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<OrderWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type UserWhereInput = {
  readonly AND?: ReadonlyArray<UserWhereInput | null> | null;
  readonly OR?: ReadonlyArray<UserWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email?: Scalars['String'] | null;
  readonly email_not?: Scalars['String'] | null;
  readonly email_contains?: Scalars['String'] | null;
  readonly email_not_contains?: Scalars['String'] | null;
  readonly email_starts_with?: Scalars['String'] | null;
  readonly email_not_starts_with?: Scalars['String'] | null;
  readonly email_ends_with?: Scalars['String'] | null;
  readonly email_not_ends_with?: Scalars['String'] | null;
  readonly email_i?: Scalars['String'] | null;
  readonly email_not_i?: Scalars['String'] | null;
  readonly email_contains_i?: Scalars['String'] | null;
  readonly email_not_contains_i?: Scalars['String'] | null;
  readonly email_starts_with_i?: Scalars['String'] | null;
  readonly email_not_starts_with_i?: Scalars['String'] | null;
  readonly email_ends_with_i?: Scalars['String'] | null;
  readonly email_not_ends_with_i?: Scalars['String'] | null;
  readonly email_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly password_is_set?: Scalars['Boolean'] | null;
  readonly cart_every?: CartItemWhereInput | null;
  readonly cart_some?: CartItemWhereInput | null;
  readonly cart_none?: CartItemWhereInput | null;
  readonly orders_every?: OrderWhereInput | null;
  readonly orders_some?: OrderWhereInput | null;
  readonly orders_none?: OrderWhereInput | null;
  readonly passwordResetToken_is_set?: Scalars['Boolean'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_not?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_lt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_lte?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_gt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_gte?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetIssuedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_not?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_lt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_lte?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_gt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_gte?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetRedeemedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthToken_is_set?: Scalars['Boolean'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_not?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_lt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_lte?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_gt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_gte?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthIssuedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_not?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_lt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_lte?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_gt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_gte?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthRedeemedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
};

export type UserWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortUsersBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'email_ASC'
  | 'email_DESC'
  | 'cart_ASC'
  | 'cart_DESC'
  | 'orders_ASC'
  | 'orders_DESC'
  | 'passwordResetIssuedAt_ASC'
  | 'passwordResetIssuedAt_DESC'
  | 'passwordResetRedeemedAt_ASC'
  | 'passwordResetRedeemedAt_DESC'
  | 'magicAuthIssuedAt_ASC'
  | 'magicAuthIssuedAt_DESC'
  | 'magicAuthRedeemedAt_ASC'
  | 'magicAuthRedeemedAt_DESC';

export type UserUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly cart?: CartItemRelateToManyInput | null;
  readonly orders?: OrderRelateToManyInput | null;
  readonly passwordResetToken?: Scalars['String'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthToken?: Scalars['String'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
};

export type UsersUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: UserUpdateInput | null;
};

export type UserCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly cart?: CartItemRelateToManyInput | null;
  readonly orders?: OrderRelateToManyInput | null;
  readonly passwordResetToken?: Scalars['String'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthToken?: Scalars['String'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
};

export type UsersCreateInput = {
  readonly data?: UserCreateInput | null;
};

export type CatImageRelateToOneInput = {
  readonly create?: CatImageCreateInput | null;
  readonly connect?: CatImageWhereUniqueInput | null;
  readonly disconnect?: CatImageWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type CatWhereInput = {
  readonly AND?: ReadonlyArray<CatWhereInput | null> | null;
  readonly OR?: ReadonlyArray<CatWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description?: Scalars['String'] | null;
  readonly description_not?: Scalars['String'] | null;
  readonly description_contains?: Scalars['String'] | null;
  readonly description_not_contains?: Scalars['String'] | null;
  readonly description_starts_with?: Scalars['String'] | null;
  readonly description_not_starts_with?: Scalars['String'] | null;
  readonly description_ends_with?: Scalars['String'] | null;
  readonly description_not_ends_with?: Scalars['String'] | null;
  readonly description_i?: Scalars['String'] | null;
  readonly description_not_i?: Scalars['String'] | null;
  readonly description_contains_i?: Scalars['String'] | null;
  readonly description_not_contains_i?: Scalars['String'] | null;
  readonly description_starts_with_i?: Scalars['String'] | null;
  readonly description_not_starts_with_i?: Scalars['String'] | null;
  readonly description_ends_with_i?: Scalars['String'] | null;
  readonly description_not_ends_with_i?: Scalars['String'] | null;
  readonly description_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly price?: Scalars['Int'] | null;
  readonly price_not?: Scalars['Int'] | null;
  readonly price_lt?: Scalars['Int'] | null;
  readonly price_lte?: Scalars['Int'] | null;
  readonly price_gt?: Scalars['Int'] | null;
  readonly price_gte?: Scalars['Int'] | null;
  readonly price_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly price_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly photo?: CatImageWhereInput | null;
  readonly photo_is_null?: Scalars['Boolean'] | null;
};

export type CatWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortCatsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'price_ASC'
  | 'price_DESC'
  | 'photo_ASC'
  | 'photo_DESC';

export type CatUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly price?: Scalars['Int'] | null;
  readonly photo?: CatImageRelateToOneInput | null;
};

export type CatsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: CatUpdateInput | null;
};

export type CatCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly price?: Scalars['Int'] | null;
  readonly photo?: CatImageRelateToOneInput | null;
};

export type CatsCreateInput = {
  readonly data?: CatCreateInput | null;
};

export type CloudinaryImageFormat = {
  readonly prettyName?: Scalars['String'] | null;
  readonly width?: Scalars['String'] | null;
  readonly height?: Scalars['String'] | null;
  readonly crop?: Scalars['String'] | null;
  readonly aspect_ratio?: Scalars['String'] | null;
  readonly gravity?: Scalars['String'] | null;
  readonly zoom?: Scalars['String'] | null;
  readonly x?: Scalars['String'] | null;
  readonly y?: Scalars['String'] | null;
  readonly format?: Scalars['String'] | null;
  readonly fetch_format?: Scalars['String'] | null;
  readonly quality?: Scalars['String'] | null;
  readonly radius?: Scalars['String'] | null;
  readonly angle?: Scalars['String'] | null;
  readonly effect?: Scalars['String'] | null;
  readonly opacity?: Scalars['String'] | null;
  readonly border?: Scalars['String'] | null;
  readonly background?: Scalars['String'] | null;
  readonly overlay?: Scalars['String'] | null;
  readonly underlay?: Scalars['String'] | null;
  readonly default_image?: Scalars['String'] | null;
  readonly delay?: Scalars['String'] | null;
  readonly color?: Scalars['String'] | null;
  readonly color_space?: Scalars['String'] | null;
  readonly dpr?: Scalars['String'] | null;
  readonly page?: Scalars['String'] | null;
  readonly density?: Scalars['String'] | null;
  readonly flags?: Scalars['String'] | null;
  readonly transformation?: Scalars['String'] | null;
};

export type CatRelateToOneInput = {
  readonly create?: CatCreateInput | null;
  readonly connect?: CatWhereUniqueInput | null;
  readonly disconnect?: CatWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type CatImageWhereInput = {
  readonly AND?: ReadonlyArray<CatImageWhereInput | null> | null;
  readonly OR?: ReadonlyArray<CatImageWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly image?: Scalars['String'] | null;
  readonly image_not?: Scalars['String'] | null;
  readonly image_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly image_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly altText?: Scalars['String'] | null;
  readonly altText_not?: Scalars['String'] | null;
  readonly altText_contains?: Scalars['String'] | null;
  readonly altText_not_contains?: Scalars['String'] | null;
  readonly altText_starts_with?: Scalars['String'] | null;
  readonly altText_not_starts_with?: Scalars['String'] | null;
  readonly altText_ends_with?: Scalars['String'] | null;
  readonly altText_not_ends_with?: Scalars['String'] | null;
  readonly altText_i?: Scalars['String'] | null;
  readonly altText_not_i?: Scalars['String'] | null;
  readonly altText_contains_i?: Scalars['String'] | null;
  readonly altText_not_contains_i?: Scalars['String'] | null;
  readonly altText_starts_with_i?: Scalars['String'] | null;
  readonly altText_not_starts_with_i?: Scalars['String'] | null;
  readonly altText_ends_with_i?: Scalars['String'] | null;
  readonly altText_not_ends_with_i?: Scalars['String'] | null;
  readonly altText_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly altText_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly cat?: CatWhereInput | null;
  readonly cat_is_null?: Scalars['Boolean'] | null;
};

export type CatImageWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortCatImagesBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'altText_ASC'
  | 'altText_DESC'
  | 'cat_ASC'
  | 'cat_DESC';

export type CatImageUpdateInput = {
  readonly image?: any | null;
  readonly altText?: Scalars['String'] | null;
  readonly cat?: CatRelateToOneInput | null;
};

export type CatImagesUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: CatImageUpdateInput | null;
};

export type CatImageCreateInput = {
  readonly image?: any | null;
  readonly altText?: Scalars['String'] | null;
  readonly cat?: CatRelateToOneInput | null;
};

export type CatImagesCreateInput = {
  readonly data?: CatImageCreateInput | null;
};

export type UserRelateToOneInput = {
  readonly create?: UserCreateInput | null;
  readonly connect?: UserWhereUniqueInput | null;
  readonly disconnect?: UserWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type CartItemWhereInput = {
  readonly AND?: ReadonlyArray<CartItemWhereInput | null> | null;
  readonly OR?: ReadonlyArray<CartItemWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly product?: CatWhereInput | null;
  readonly product_is_null?: Scalars['Boolean'] | null;
  readonly user?: UserWhereInput | null;
  readonly user_is_null?: Scalars['Boolean'] | null;
};

export type CartItemWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortCartItemsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'product_ASC'
  | 'product_DESC'
  | 'user_ASC'
  | 'user_DESC';

export type CartItemUpdateInput = {
  readonly product?: CatRelateToOneInput | null;
  readonly user?: UserRelateToOneInput | null;
};

export type CartItemsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: CartItemUpdateInput | null;
};

export type CartItemCreateInput = {
  readonly product?: CatRelateToOneInput | null;
  readonly user?: UserRelateToOneInput | null;
};

export type CartItemsCreateInput = {
  readonly data?: CartItemCreateInput | null;
};

export type OrderRelateToOneInput = {
  readonly create?: OrderCreateInput | null;
  readonly connect?: OrderWhereUniqueInput | null;
  readonly disconnect?: OrderWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type OrderItemWhereInput = {
  readonly AND?: ReadonlyArray<OrderItemWhereInput | null> | null;
  readonly OR?: ReadonlyArray<OrderItemWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description?: Scalars['String'] | null;
  readonly description_not?: Scalars['String'] | null;
  readonly description_contains?: Scalars['String'] | null;
  readonly description_not_contains?: Scalars['String'] | null;
  readonly description_starts_with?: Scalars['String'] | null;
  readonly description_not_starts_with?: Scalars['String'] | null;
  readonly description_ends_with?: Scalars['String'] | null;
  readonly description_not_ends_with?: Scalars['String'] | null;
  readonly description_i?: Scalars['String'] | null;
  readonly description_not_i?: Scalars['String'] | null;
  readonly description_contains_i?: Scalars['String'] | null;
  readonly description_not_contains_i?: Scalars['String'] | null;
  readonly description_starts_with_i?: Scalars['String'] | null;
  readonly description_not_starts_with_i?: Scalars['String'] | null;
  readonly description_ends_with_i?: Scalars['String'] | null;
  readonly description_not_ends_with_i?: Scalars['String'] | null;
  readonly description_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly price?: Scalars['Int'] | null;
  readonly price_not?: Scalars['Int'] | null;
  readonly price_lt?: Scalars['Int'] | null;
  readonly price_lte?: Scalars['Int'] | null;
  readonly price_gt?: Scalars['Int'] | null;
  readonly price_gte?: Scalars['Int'] | null;
  readonly price_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly price_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly order?: OrderWhereInput | null;
  readonly order_is_null?: Scalars['Boolean'] | null;
  readonly photo?: CatImageWhereInput | null;
  readonly photo_is_null?: Scalars['Boolean'] | null;
};

export type OrderItemWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortOrderItemsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'price_ASC'
  | 'price_DESC'
  | 'order_ASC'
  | 'order_DESC'
  | 'photo_ASC'
  | 'photo_DESC';

export type OrderItemUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly price?: Scalars['Int'] | null;
  readonly order?: OrderRelateToOneInput | null;
  readonly photo?: CatImageRelateToOneInput | null;
};

export type OrderItemsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: OrderItemUpdateInput | null;
};

export type OrderItemCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly price?: Scalars['Int'] | null;
  readonly order?: OrderRelateToOneInput | null;
  readonly photo?: CatImageRelateToOneInput | null;
};

export type OrderItemsCreateInput = {
  readonly data?: OrderItemCreateInput | null;
};

export type OrderItemRelateToManyInput = {
  readonly create?: ReadonlyArray<OrderItemCreateInput | null> | null;
  readonly connect?: ReadonlyArray<OrderItemWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<OrderItemWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type OrderWhereInput = {
  readonly AND?: ReadonlyArray<OrderWhereInput | null> | null;
  readonly OR?: ReadonlyArray<OrderWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly total?: Scalars['Int'] | null;
  readonly total_not?: Scalars['Int'] | null;
  readonly total_lt?: Scalars['Int'] | null;
  readonly total_lte?: Scalars['Int'] | null;
  readonly total_gt?: Scalars['Int'] | null;
  readonly total_gte?: Scalars['Int'] | null;
  readonly total_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly total_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly items_every?: OrderItemWhereInput | null;
  readonly items_some?: OrderItemWhereInput | null;
  readonly items_none?: OrderItemWhereInput | null;
  readonly user?: UserWhereInput | null;
  readonly user_is_null?: Scalars['Boolean'] | null;
  readonly charge?: Scalars['String'] | null;
  readonly charge_not?: Scalars['String'] | null;
  readonly charge_contains?: Scalars['String'] | null;
  readonly charge_not_contains?: Scalars['String'] | null;
  readonly charge_starts_with?: Scalars['String'] | null;
  readonly charge_not_starts_with?: Scalars['String'] | null;
  readonly charge_ends_with?: Scalars['String'] | null;
  readonly charge_not_ends_with?: Scalars['String'] | null;
  readonly charge_i?: Scalars['String'] | null;
  readonly charge_not_i?: Scalars['String'] | null;
  readonly charge_contains_i?: Scalars['String'] | null;
  readonly charge_not_contains_i?: Scalars['String'] | null;
  readonly charge_starts_with_i?: Scalars['String'] | null;
  readonly charge_not_starts_with_i?: Scalars['String'] | null;
  readonly charge_ends_with_i?: Scalars['String'] | null;
  readonly charge_not_ends_with_i?: Scalars['String'] | null;
  readonly charge_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly charge_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
};

export type OrderWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortOrdersBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'total_ASC'
  | 'total_DESC'
  | 'items_ASC'
  | 'items_DESC'
  | 'user_ASC'
  | 'user_DESC'
  | 'charge_ASC'
  | 'charge_DESC';

export type OrderUpdateInput = {
  readonly total?: Scalars['Int'] | null;
  readonly items?: OrderItemRelateToManyInput | null;
  readonly user?: UserRelateToOneInput | null;
  readonly charge?: Scalars['String'] | null;
};

export type OrdersUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: OrderUpdateInput | null;
};

export type OrderCreateInput = {
  readonly total?: Scalars['Int'] | null;
  readonly items?: OrderItemRelateToManyInput | null;
  readonly user?: UserRelateToOneInput | null;
  readonly charge?: Scalars['String'] | null;
};

export type OrdersCreateInput = {
  readonly data?: OrderCreateInput | null;
};

export type _ksListsMetaInput = {
  readonly key?: Scalars['String'] | null;
  readonly auxiliary?: Scalars['Boolean'] | null;
};

export type _ListSchemaFieldsInput = {
  readonly type?: Scalars['String'] | null;
};

export type PasswordAuthErrorCode =
  | 'FAILURE'
  | 'IDENTITY_NOT_FOUND'
  | 'SECRET_NOT_SET'
  | 'MULTIPLE_IDENTITY_MATCHES'
  | 'SECRET_MISMATCH';

export type CreateInitialUserInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
};

export type PasswordResetRequestErrorCode =
  | 'IDENTITY_NOT_FOUND'
  | 'MULTIPLE_IDENTITY_MATCHES';

export type PasswordResetRedemptionErrorCode =
  | 'FAILURE'
  | 'IDENTITY_NOT_FOUND'
  | 'MULTIPLE_IDENTITY_MATCHES'
  | 'TOKEN_NOT_SET'
  | 'TOKEN_MISMATCH'
  | 'TOKEN_EXPIRED'
  | 'TOKEN_REDEEMED';

export type KeystoneAdminUIFieldMetaCreateViewFieldMode = 'edit' | 'hidden';

export type KeystoneAdminUIFieldMetaListViewFieldMode = 'read' | 'hidden';

export type KeystoneAdminUIFieldMetaItemViewFieldMode =
  | 'edit'
  | 'read'
  | 'hidden';

export type KeystoneAdminUISortDirection = 'ASC' | 'DESC';

export type UserListTypeInfo = {
  key: 'User';
  fields:
    | 'id'
    | 'name'
    | 'email'
    | 'password'
    | 'cart'
    | 'orders'
    | 'passwordResetToken'
    | 'passwordResetIssuedAt'
    | 'passwordResetRedeemedAt'
    | 'magicAuthToken'
    | 'magicAuthIssuedAt'
    | 'magicAuthRedeemedAt';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly email?: string | null;
    readonly password?: string | null;
    readonly cart?: string | null;
    readonly orders?: string | null;
    readonly passwordResetToken?: string | null;
    readonly passwordResetIssuedAt?: Date | null;
    readonly passwordResetRedeemedAt?: Date | null;
    readonly magicAuthToken?: string | null;
    readonly magicAuthIssuedAt?: Date | null;
    readonly magicAuthRedeemedAt?: Date | null;
  };
  inputs: {
    where: UserWhereInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: UserWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortUsersBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type UserListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    UserListTypeInfo,
    UserListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  UserListTypeInfo,
  UserListTypeInfo['fields']
>;

export type CatListTypeInfo = {
  key: 'Cat';
  fields: 'id' | 'name' | 'description' | 'price' | 'photo';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly description?: string | null;
    readonly price?: number | null;
    readonly photo?: string | null;
  };
  inputs: {
    where: CatWhereInput;
    create: CatCreateInput;
    update: CatUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: CatWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortCatsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type CatListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    CatListTypeInfo,
    CatListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  CatListTypeInfo,
  CatListTypeInfo['fields']
>;

export type CatImageListTypeInfo = {
  key: 'CatImage';
  fields: 'id' | 'image' | 'altText' | 'cat';
  backing: {
    readonly id: string;
    readonly image?: any;
    readonly altText?: string | null;
    readonly cat?: string | null;
  };
  inputs: {
    where: CatImageWhereInput;
    create: CatImageCreateInput;
    update: CatImageUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: CatImageWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortCatImagesBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type CatImageListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    CatImageListTypeInfo,
    CatImageListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  CatImageListTypeInfo,
  CatImageListTypeInfo['fields']
>;

export type CartItemListTypeInfo = {
  key: 'CartItem';
  fields: 'id' | 'product' | 'user';
  backing: {
    readonly id: string;
    readonly product?: string | null;
    readonly user?: string | null;
  };
  inputs: {
    where: CartItemWhereInput;
    create: CartItemCreateInput;
    update: CartItemUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: CartItemWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortCartItemsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type CartItemListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    CartItemListTypeInfo,
    CartItemListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  CartItemListTypeInfo,
  CartItemListTypeInfo['fields']
>;

export type OrderItemListTypeInfo = {
  key: 'OrderItem';
  fields: 'id' | 'name' | 'description' | 'price' | 'order' | 'photo';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly description?: string | null;
    readonly price?: number | null;
    readonly order?: string | null;
    readonly photo?: string | null;
  };
  inputs: {
    where: OrderItemWhereInput;
    create: OrderItemCreateInput;
    update: OrderItemUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: OrderItemWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortOrderItemsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type OrderItemListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    OrderItemListTypeInfo,
    OrderItemListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  OrderItemListTypeInfo,
  OrderItemListTypeInfo['fields']
>;

export type OrderListTypeInfo = {
  key: 'Order';
  fields: 'id' | 'total' | 'items' | 'user' | 'charge';
  backing: {
    readonly id: string;
    readonly total?: number | null;
    readonly items?: string | null;
    readonly user?: string | null;
    readonly charge?: string | null;
  };
  inputs: {
    where: OrderWhereInput;
    create: OrderCreateInput;
    update: OrderUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: OrderWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortOrdersBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type OrderListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    OrderListTypeInfo,
    OrderListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  OrderListTypeInfo,
  OrderListTypeInfo['fields']
>;

export type KeystoneListsTypeInfo = {
  readonly User: UserListTypeInfo;
  readonly Cat: CatListTypeInfo;
  readonly CatImage: CatImageListTypeInfo;
  readonly CartItem: CartItemListTypeInfo;
  readonly OrderItem: OrderItemListTypeInfo;
  readonly Order: OrderListTypeInfo;
};
